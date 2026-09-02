export const SKILLSLOT_SITE_URL = 'https://skillslot.app'

export const SKILLSLOT_SUPPORT_EMAIL = 'support@skillslot.app'

export const SKILLSLOT_GITHUB_URL = 'https://github.com/beanu/skillslot.app'

export const SKILLSLOT_X_URL = 'https://x.com/robot_yz'

const configuredDownloadUrl = process.env.NEXT_PUBLIC_SKILLSLOT_DOWNLOAD_URL?.trim()
const defaultDownloadUrl = 'https://d.skillslot.app/SkillSlot_0.1.3_aarch64.dmg'

// Keep the public release available by default while allowing deployments to
// override it when publishing a newer macOS build.
export const SKILLSLOT_DOWNLOAD_URL = configuredDownloadUrl || defaultDownloadUrl
