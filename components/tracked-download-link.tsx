'use client'

import type { ComponentProps } from 'react'
import { trackUmami } from '@/lib/umami'

type TrackedDownloadLinkProps = ComponentProps<'a'> & {
  source: string
}

export function TrackedDownloadLink({
  source,
  onClick,
  ...props
}: TrackedDownloadLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          trackUmami('download', { source })
        }
      }}
    />
  )
}
