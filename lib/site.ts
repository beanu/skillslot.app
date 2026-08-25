export const SKILLSLOT_SITE_URL = 'https://skillslot.app'

export const SKILLSLOT_SUPPORT_EMAIL = 'support@skillslot.app'

export const SKILLSLOT_GITHUB_URL = 'https://github.com/beanu/skillslot.app'

export const SKILLSLOT_X_URL = 'https://x.com/robot_yz'

export const CREEM_BUYER_TERMS_URL = 'https://www.creem.io/buyer-terms'

const configuredDownloadUrl = process.env.NEXT_PUBLIC_SKILLSLOT_DOWNLOAD_URL?.trim()

// Render download CTAs only after a public, reviewer-accessible artifact URL
// has been configured. Missing or private releases must not become dead links.
export const SKILLSLOT_DOWNLOAD_URL = configuredDownloadUrl || null
