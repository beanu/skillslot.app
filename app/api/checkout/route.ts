import { z } from 'zod'

const DEFAULT_CREEM_PROXY_BASE = 'https://api.skillslot.app/api/v1/creem'

const checkoutRequestSchema = z.object({
  plan_id: z.enum(['mac_1', 'mac_2', 'mac_3']),
  request_id: z.string().min(8).max(128),
  locale: z.enum(['zh', 'en']),
})

type JsonObject = Record<string, unknown>

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function errorResponse(status: number, message: string, traceId?: string) {
  return Response.json(
    {
      error: status >= 500 ? 'Checkout unavailable' : 'Invalid checkout request',
      message: [message],
      ...(traceId ? { trace_id: traceId } : {}),
    },
    { status },
  )
}

function getCheckoutUrl(value: unknown): string | null {
  if (!isJsonObject(value)) return null

  const candidate = value.checkout_url ?? value.checkoutUrl ?? value.url
  if (typeof candidate !== 'string') return null

  try {
    const url = new URL(candidate)
    const isCreemHost = url.hostname === 'creem.io' || url.hostname.endsWith('.creem.io')
    return url.protocol === 'https:' && isCreemHost ? url.toString() : null
  } catch {
    return null
  }
}

async function parseResponseBody(response: Response): Promise<unknown> {
  const text = await response.text()
  if (!text) return null

  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  let requestBody: unknown

  try {
    requestBody = await request.json()
  } catch {
    return errorResponse(400, 'Request body must be valid JSON.')
  }

  const parsed = checkoutRequestSchema.safeParse(requestBody)
  if (!parsed.success) {
    return errorResponse(400, parsed.error.issues[0]?.message || 'Invalid checkout request.')
  }

  const proxyBase = (
    process.env.SKILLSLOT_CREEM_PROXY_BASE || DEFAULT_CREEM_PROXY_BASE
  ).replace(/\/+$/, '')

  let upstream: Response

  try {
    upstream = await fetch(`${proxyBase}/checkouts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: parsed.data.plan_id,
        reference_id: parsed.data.request_id,
        metadata: {
          source: 'skillslot-web',
          locale: parsed.data.locale,
          plan_id: parsed.data.plan_id,
        },
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(15_000),
    })
  } catch {
    return errorResponse(503, 'Payment service is temporarily unavailable. Please try again.')
  }

  const upstreamBody = await parseResponseBody(upstream)

  if (!upstream.ok) {
    const upstreamMessages = isJsonObject(upstreamBody) ? upstreamBody.message : null
    const firstMessage = Array.isArray(upstreamMessages)
      ? upstreamMessages.find((message): message is string => typeof message === 'string')
      : null
    const traceId =
      isJsonObject(upstreamBody) && typeof upstreamBody.trace_id === 'string'
        ? upstreamBody.trace_id
        : undefined

    return errorResponse(
      upstream.status >= 400 && upstream.status < 600 ? upstream.status : 502,
      firstMessage || 'Unable to create checkout. Please try again.',
      traceId,
    )
  }

  const checkoutUrl = getCheckoutUrl(upstreamBody)
  if (!checkoutUrl) {
    return errorResponse(502, 'Payment service returned an invalid checkout URL.')
  }

  return Response.json(
    {
      checkout_url: checkoutUrl,
      request_id: parsed.data.request_id,
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  )
}
