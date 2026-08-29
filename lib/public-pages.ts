export type LocalizedText = {
  zh: string
  en: string
}

export type PublicPageLink = {
  label: LocalizedText
  href: string
  external?: boolean
}

export type PublicPageSection = {
  id: string
  title: LocalizedText
  paragraphs?: LocalizedText[]
  bullets?: LocalizedText[]
  links?: PublicPageLink[]
}

export type PublicPageData = {
  eyebrow: LocalizedText
  title: LocalizedText
  description: LocalizedText
  updated?: LocalizedText
  sections: PublicPageSection[]
}

const effectiveDate: LocalizedText = {
  zh: '生效日期：2026 年 8 月 25 日',
  en: 'Effective date: August 25, 2026',
}

export const privacyPage: PublicPageData = {
  eyebrow: { zh: '法律与隐私', en: 'Legal and privacy' },
  title: { zh: '隐私政策', en: 'Privacy Policy' },
  description: {
    zh: '本政策说明 SkillSlot 网站和 macOS 应用处理哪些数据、为什么处理，以及你可以如何联系我们。',
    en: 'This policy explains what data the SkillSlot website and macOS app process, why we process it, and how you can contact us.',
  },
  updated: effectiveDate,
  sections: [
    {
      id: 'scope',
      title: { zh: '1. 适用范围与联系方式', en: '1. Scope and contact' },
      paragraphs: [
        {
          zh: '本政策适用于 skillslot.app、SkillSlot macOS 应用、License 激活服务以及与购买和支持相关的服务。SkillSlot 由 SkillSlot 团队运营。隐私问题可发送至 support@skillslot.app。',
          en: 'This policy applies to skillslot.app, the SkillSlot macOS app, license activation services, and purchase and support services. SkillSlot is operated by the SkillSlot team. Privacy questions can be sent to support@skillslot.app.',
        },
      ],
      links: [
        { label: { zh: '发送隐私问题', en: 'Email a privacy question' }, href: 'mailto:support@skillslot.app' },
      ],
    },
    {
      id: 'local-data',
      title: { zh: '2. 保存在 Mac 本地的数据', en: '2. Data stored locally on your Mac' },
      paragraphs: [
        {
          zh: 'SkillSlot 以本地优先方式运行。扫描到的 Skill、Vault 文件、Loadout、部署目标、部署历史、设置和本地缓存通常保存在你的 Mac 上。我们不会为了提供基础管理和部署功能而上传整个 Vault。',
          en: 'SkillSlot is local-first. Discovered Skills, Vault files, Loadouts, deployment targets, deployment history, settings, and local caches are generally stored on your Mac. We do not upload your entire Vault to provide basic management and deployment features.',
        },
        {
          zh: '卸载应用不会自动删除你选择保留的 Vault 文件。你可以通过应用和 Finder 管理或删除本地内容。',
          en: 'Uninstalling the app may not automatically remove Vault files you chose to keep. You can manage or delete local content through the app and Finder.',
        },
      ],
    },
    {
      id: 'online-features',
      title: { zh: '3. 在线功能处理的数据', en: '3. Data processed by online features' },
      paragraphs: [
        {
          zh: '使用 Skill 摘要或 AI 技能地图分类时，SkillSlot 会向 SkillSlot API 发送完成请求所需的内容。摘要请求可能包含 SKILL.md 内容、Skill 名称、标识和校验值；技能地图分类请求可能包含 Skill 名称、slug 和描述。请不要在 Skill 文件中保存密码、API Key 或其他秘密。',
          en: 'When you use Skill summaries or AI Skill Map categorization, SkillSlot sends the content needed to complete the request to the SkillSlot API. Summary requests may include SKILL.md content, the Skill name, identifier, and checksum. Skill Map categorization requests may include Skill names, slugs, and descriptions. Do not store passwords, API keys, or other secrets in Skill files.',
        },
        {
          zh: '使用 Skill 市场搜索或安装时，请求会发送到对应的第三方 Skill 来源，例如 ClawHub。第三方来源会按照其自己的隐私政策处理请求。',
          en: 'When you search or install from the Skill market, requests are sent to the relevant third-party Skill source, such as ClawHub. Those sources process requests under their own privacy policies.',
        },
      ],
    },
    {
      id: 'trial-license',
      title: { zh: '4. 试用与 License 数据', en: '4. Trial and license data' },
      paragraphs: [
        {
          zh: '为了提供 7 天试用、防止重复试用并管理设备激活，我们会处理设备指纹、设备名称、应用版本、平台、试用时间和 License 状态。激活、验证或停用 License 时，我们还会处理 License Key、Creem 实例 ID、激活数量和有效状态。',
          en: 'To provide the 7-day trial, prevent repeated trials, and manage device activations, we process a device fingerprint, device name, app version, platform, trial dates, and license status. When a license is activated, validated, or deactivated, we also process the license key, Creem instance ID, activation count, and validity status.',
        },
        {
          zh: '完整 License Key 会加密保存在本地缓存中，并通过 SkillSlot License 服务与 Creem 验证。不要通过普通邮件发送完整 License Key。',
          en: 'The full license key is stored in an encrypted local cache and validated through the SkillSlot license service and Creem. Do not send a full license key through ordinary email.',
        },
      ],
    },
    {
      id: 'payments',
      title: { zh: '5. 购买与支付', en: '5. Purchases and payments' },
      paragraphs: [
        {
          zh: 'Creem 作为 Merchant of Record 处理结账、付款、税费、发票、退款和 License Key 交付。Creem 可能收集姓名、邮箱、账单地址、付款信息和订单信息。SkillSlot 不接收或保存完整银行卡号。',
          en: 'Creem acts as the Merchant of Record and handles checkout, payment, tax, invoices, refunds, and license-key delivery. Creem may collect your name, email address, billing address, payment details, and order information. SkillSlot does not receive or store complete card numbers.',
        },
        {
          zh: 'SkillSlot 会接收和保存完成购买、处理支持以及防止欺诈所需的最少订单和 License 元数据。支付页面和 Creem Customer Portal 也受 Creem 自己的隐私政策与 Buyer Terms 约束。',
          en: 'SkillSlot receives and stores the minimum order and license metadata needed to fulfil purchases, provide support, and prevent fraud. Creem checkout and the Creem Customer Portal are also governed by Creem’s own privacy notice and Buyer Terms.',
        },
      ],
      links: [
        { label: { zh: '查看 Creem 隐私政策', en: 'Read Creem’s Privacy Notice' }, href: 'https://www.creem.io/privacy', external: true },
        { label: { zh: '查看 Creem Buyer Terms', en: 'Read Creem Buyer Terms' }, href: 'https://www.creem.io/buyer-terms', external: true },
      ],
    },
    {
      id: 'website',
      title: { zh: '6. 网站分析与技术日志', en: '6. Website analytics and technical logs' },
      paragraphs: [
        {
          zh: '网站使用 Vercel Analytics 了解页面访问和基本使用情况。托管、API 和安全系统也可能处理 IP 地址、浏览器与设备信息、请求时间、来源页面、错误信息和安全日志。我们不使用这些数据建立跨网站广告画像。',
          en: 'The website uses Vercel Analytics to understand page visits and basic usage. Hosting, API, and security systems may also process IP addresses, browser and device information, request times, referrers, error information, and security logs. We do not use this data to build cross-site advertising profiles.',
        },
      ],
    },
    {
      id: 'use-sharing',
      title: { zh: '7. 使用目的与共享对象', en: '7. Purposes and recipients' },
      bullets: [
        { zh: '运行、保护和改进 SkillSlot 及其在线功能。', en: 'Operate, secure, and improve SkillSlot and its online features.' },
        { zh: '提供试用、License 激活、订单交付、退款和客户支持。', en: 'Provide trials, license activation, order fulfilment, refunds, and customer support.' },
        { zh: '遵守法律义务，调查欺诈、滥用、安全事件和付款争议。', en: 'Comply with legal obligations and investigate fraud, abuse, security incidents, and payment disputes.' },
        { zh: '与提供托管、分析、AI 处理、支付和 Skill 来源的服务商共享完成服务所需的最少数据。', en: 'Share the minimum necessary data with providers of hosting, analytics, AI processing, payments, and Skill sources.' },
      ],
      paragraphs: [
        {
          zh: '我们不会出售你的个人信息。除服务提供商、法律要求、业务重组或经你同意的情况外，我们不会向第三方披露个人信息。',
          en: 'We do not sell personal information. We do not disclose personal information except to service providers, when legally required, in connection with a business reorganisation, or with your consent.',
        },
      ],
    },
    {
      id: 'retention-security',
      title: { zh: '8. 保存期限与安全', en: '8. Retention and security' },
      paragraphs: [
        {
          zh: '本地数据会保存到你删除为止。订单、试用、License、安全和支持记录会在提供服务、防止欺诈、处理争议和履行法律义务所需的期限内保存。Creem webhook 的最小化审计记录通常保存 90 天。',
          en: 'Local data remains until you delete it. Order, trial, license, security, and support records are retained for as long as needed to provide the service, prevent fraud, resolve disputes, and meet legal obligations. Privacy-minimised Creem webhook audit records are normally retained for 90 days.',
        },
        {
          zh: '我们采用传输加密、访问控制和本地 License 缓存加密等措施，但任何系统都无法保证绝对安全。',
          en: 'We use measures such as encryption in transit, access controls, and encrypted local license caching, but no system can guarantee absolute security.',
        },
      ],
    },
    {
      id: 'rights',
      title: { zh: '9. 你的选择、权利与政策更新', en: '9. Your choices, rights, and policy updates' },
      paragraphs: [
        {
          zh: '你可以停止使用在线功能、删除本地数据或联系我们申请访问、更正或删除我们持有的个人信息。某些订单、税务、防欺诈或争议记录可能依法继续保存。根据所在地法律，你还可能拥有限制处理、数据可携带或向监管机构投诉的权利。',
          en: 'You may stop using online features, delete local data, or contact us to request access to, correction of, or deletion of personal information we hold. Certain order, tax, anti-fraud, or dispute records may need to be retained by law. Depending on your location, you may also have rights to restrict processing, data portability, or to complain to a regulator.',
        },
        {
          zh: '我们可能更新本政策。重大变更会通过网站、应用或其他合理方式通知，并在本页更新生效日期。',
          en: 'We may update this policy. Material changes will be communicated through the website, app, or another reasonable method, and the effective date on this page will be updated.',
        },
      ],
      links: [
        { label: { zh: '联系 SkillSlot', en: 'Contact SkillSlot' }, href: '/contact' },
      ],
    },
  ],
}

export const termsPage: PublicPageData = {
  eyebrow: { zh: '购买与使用', en: 'Purchase and use' },
  title: { zh: '服务条款', en: 'Terms of Service' },
  description: {
    zh: '这些条款规定你使用 SkillSlot 网站、macOS 应用、试用和 License 的权利与责任。',
    en: 'These terms govern your use of the SkillSlot website, macOS app, trial, and license.',
  },
  updated: effectiveDate,
  sections: [
    {
      id: 'acceptance',
      title: { zh: '1. 接受条款', en: '1. Acceptance' },
      paragraphs: [
        {
          zh: '访问网站、下载或使用 SkillSlot，即表示你同意这些条款和隐私政策。代表组织使用 SkillSlot 时，你确认自己有权代表该组织接受条款。如果你不同意，请不要使用本服务。',
          en: 'By accessing the website, downloading, or using SkillSlot, you agree to these Terms and the Privacy Policy. If you use SkillSlot for an organisation, you confirm that you are authorised to accept these Terms for that organisation. If you do not agree, do not use the service.',
        },
        {
          zh: '你必须达到所在地订立合同所需的法定年龄，并提供准确的购买和支持信息。',
          en: 'You must be old enough to enter into a contract where you live and provide accurate purchase and support information.',
        },
      ],
    },
    {
      id: 'product',
      title: { zh: '2. 产品与本地优先模式', en: '2. Product and local-first operation' },
      paragraphs: [
        {
          zh: 'SkillSlot 是一款用于发现、理解、组织和部署本地 Agent Skills 的 macOS 应用。基础数据主要保存在你的 Mac 上，部分明确标识的摘要、技能地图分类、市场、试用和 License 功能需要联网。',
          en: 'SkillSlot is a macOS app for discovering, understanding, organising, and deploying local Agent Skills. Core data is primarily stored on your Mac. Certain clearly identified summary, Skill Map categorization, market, trial, and license features require an internet connection.',
        },
      ],
    },
    {
      id: 'trial-free',
      title: { zh: '3. 试用与 Free Mode', en: '3. Trial and Free Mode' },
      paragraphs: [
        {
          zh: '首次符合条件的设备可获得 7 天全功能试用，无需账户。我们会使用设备信息防止重复试用或规避限制。试用结束后，你可以继续使用 Free Mode。',
          en: 'An eligible device may receive a 7-day full-feature trial without an account. We use device information to prevent repeated trials or circumvention of limits. After the trial, you may continue using Free Mode.',
        },
      ],
      bullets: [
        { zh: '最多导入 10 个 Skills。', en: 'Import up to 10 Skills.' },
        { zh: '最多创建 2 个 Loadout。', en: 'Create up to 2 Loadouts.' },
        { zh: '部署到一个 Agent。', en: 'Deploy to one Agent.' },
        { zh: 'AI 技能地图与分类需要有效试用或 License。', en: 'The AI Skill Map and categorization require an active trial or license.' },
      ],
    },
    {
      id: 'license',
      title: { zh: '4. 付费 License', en: '4. Paid license' },
      paragraphs: [
        {
          zh: 'SkillSlot License 是一次性购买，不是订阅。购买后，你获得在所购设备数量范围内使用 SkillSlot 付费功能的个人或内部业务许可。1 Mac、2 Macs 和 3 Macs 方案分别允许最多 1、2 或 3 台 Mac 激活。',
          en: 'A SkillSlot license is a one-time purchase, not a subscription. It grants you a personal or internal-business license to use paid SkillSlot features on the number of devices purchased. The 1 Mac, 2 Macs, and 3 Macs plans allow activation on up to 1, 2, or 3 Macs respectively.',
        },
        {
          zh: 'License 为非独占、不可转售、不可再许可的使用权。你不得分享、出售、公开 License Key，或通过篡改设备信息和软件绕过激活限制。',
          en: 'The license is non-exclusive, non-resellable, and non-sublicensable. You may not share, sell, or publish a license key, or evade activation limits by modifying device information or the software.',
        },
      ],
    },
    {
      id: 'payment-delivery',
      title: { zh: '5. 价格、支付与交付', en: '5. Pricing, payment, and delivery' },
      paragraphs: [
        {
          zh: '购买前显示的价格、设备数量和权益构成订单的一部分。Creem 作为 Merchant of Record 向你销售产品并处理付款、税费、发票和退款。结账页面显示的含税总额是你需要支付的金额。',
          en: 'The price, device count, and included features shown before purchase form part of your order. Creem acts as the Merchant of Record and handles payment, tax, invoices, and refunds. The tax-inclusive total displayed at checkout is the amount you pay.',
        },
        {
          zh: '付款成功后，Creem 会把订单收据和 License Key 发送到结账邮箱。你需要在 SkillSlot 中粘贴 Key 并激活 Mac。请确保邮箱准确，并检查垃圾邮件文件夹。',
          en: 'After successful payment, Creem sends the receipt and license key to the checkout email address. You must paste the key into SkillSlot and activate your Mac. Make sure the email address is correct and check your spam folder.',
        },
      ],
      links: [
        { label: { zh: 'Creem Buyer Terms', en: 'Creem Buyer Terms' }, href: 'https://www.creem.io/buyer-terms', external: true },
      ],
    },
    {
      id: 'updates',
      title: { zh: '6. 更新与兼容性', en: '6. Updates and compatibility' },
      paragraphs: [
        {
          zh: '有效的永久 License 不会按月或按年到期。当前方案包含我们在产品受支持期间向同一 SkillSlot 产品公开发布的更新，无需另付订阅费。该承诺不保证特定未来功能、永久在线服务或无限期持续开发。',
          en: 'A valid perpetual license does not expire monthly or annually. Current plans include updates that we make publicly available for the same SkillSlot product while it remains supported, without a separate subscription fee. This does not guarantee particular future features, perpetual online services, or development for an unlimited period.',
        },
        {
          zh: '系统、Agent、终端或第三方服务的变化可能影响兼容性。我们会合理维护产品，但无法保证与每个旧版本或第三方工具永久兼容。',
          en: 'Changes to operating systems, Agents, terminals, or third-party services may affect compatibility. We will maintain the product reasonably but cannot guarantee permanent compatibility with every old version or third-party tool.',
        },
      ],
    },
    {
      id: 'third-party',
      title: { zh: '7. 第三方 Skills 与服务', en: '7. Third-party Skills and services' },
      paragraphs: [
        {
          zh: 'SkillSlot 可以管理、下载或部署由第三方创建的 Skills，也会与第三方 Agent、GitHub、Skill 来源和支付服务集成。第三方内容和服务由其各自条款与隐私政策约束。',
          en: 'SkillSlot can manage, download, or deploy Skills created by third parties and integrates with third-party Agents, GitHub, Skill sources, and payment services. Third-party content and services are governed by their own terms and privacy policies.',
        },
        {
          zh: '你负责确认自己有权使用、修改和部署相关 Skill，并在运行前审查其内容与权限。SkillSlot 不认可或担保每个第三方 Skill。',
          en: 'You are responsible for confirming that you may use, modify, and deploy a Skill and for reviewing its content and permissions before running it. SkillSlot does not endorse or guarantee every third-party Skill.',
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: { zh: '8. 可接受使用', en: '8. Acceptable use' },
      bullets: [
        { zh: '不得违反法律、侵犯知识产权、隐私或其他权利。', en: 'Do not violate law, intellectual property, privacy, or other rights.' },
        { zh: '不得传播恶意软件、窃取凭证、绕过安全控制或攻击系统。', en: 'Do not distribute malware, steal credentials, bypass security controls, or attack systems.' },
        { zh: '不得干扰服务、批量滥用 API、规避试用或 License 限制。', en: 'Do not disrupt the service, abuse APIs at scale, or evade trial or license limits.' },
        { zh: '不得使用 SkillSlot 销售你无权分发的第三方内容。', en: 'Do not use SkillSlot to sell third-party content you have no right to distribute.' },
      ],
    },
    {
      id: 'ownership',
      title: { zh: '9. 所有权', en: '9. Ownership' },
      paragraphs: [
        {
          zh: 'SkillSlot 软件、网站、品牌、设计和原创内容归 SkillSlot 团队或相应许可方所有。你保留对自己创建或合法拥有的 Skill 和其他内容的权利。使用产品不会把任何一方的所有权转让给另一方。',
          en: 'The SkillSlot software, website, brand, design, and original content belong to the SkillSlot team or relevant licensors. You retain rights in Skills and other content you create or lawfully own. Using the product does not transfer either party’s ownership to the other.',
        },
      ],
    },
    {
      id: 'refunds',
      title: { zh: '10. 退款', en: '10. Refunds' },
      paragraphs: [
        {
          zh: '你可以按照退款政策，在购买后 14 天内联系 support@skillslot.app 申请退款。退款后，相应 License 会被停用。强制性消费者权利不受本政策限制。',
          en: 'You may request a refund within 14 days of purchase by contacting support@skillslot.app, subject to the Refund Policy. The associated license will be deactivated after a refund. Mandatory consumer rights are not limited by this policy.',
        },
      ],
      links: [
        { label: { zh: '查看退款政策', en: 'Read the Refund Policy' }, href: '/refund-policy' },
      ],
    },
    {
      id: 'availability',
      title: { zh: '11. 可用性、备份与免责声明', en: '11. Availability, backups, and disclaimers' },
      paragraphs: [
        {
          zh: '我们努力保持 SkillSlot 可靠，但服务按现状和可用状态提供。在法律允许的范围内，我们不保证服务不会中断、完全无错误或适合每个特定目的。',
          en: 'We work to keep SkillSlot reliable, but the service is provided as available and as is. To the extent permitted by law, we do not guarantee uninterrupted or error-free operation or fitness for every particular purpose.',
        },
        {
          zh: '部署和文件操作可能修改本地目录。虽然 SkillSlot 提供保护措施，你仍应备份重要项目并在部署前审查目标。对于法律不允许排除的责任，本条款不作排除。',
          en: 'Deployment and file operations can modify local directories. Although SkillSlot provides safeguards, you should back up important projects and review targets before deployment. Nothing in these Terms excludes liability that cannot lawfully be excluded.',
        },
      ],
    },
    {
      id: 'termination',
      title: { zh: '12. 暂停与终止', en: '12. Suspension and termination' },
      paragraphs: [
        {
          zh: '严重违反这些条款、欺诈、付款争议滥用或对用户和服务造成风险时，我们可以暂停在线功能或 License。你可以随时停止使用并删除应用。应当在终止后继续有效的付款、知识产权、责任和争议条款仍然有效。',
          en: 'We may suspend online features or a license for material breaches of these Terms, fraud, abusive payment disputes, or risks to users or the service. You may stop using and delete the app at any time. Payment, intellectual-property, liability, and dispute provisions that should survive termination will remain in effect.',
        },
      ],
    },
    {
      id: 'changes-disputes',
      title: { zh: '13. 条款变更、适用法律与联系', en: '13. Changes, applicable law, and contact' },
      paragraphs: [
        {
          zh: '我们可能为反映产品、法律或运营变化而更新条款，并在本页修改生效日期。重大不利变更会通过合理方式通知。任何争议应先通过 support@skillslot.app 尝试友好解决；适用法律和法院由 SkillSlot 运营主体所在地及不可排除的消费者保护规则决定。',
          en: 'We may update these Terms to reflect product, legal, or operational changes and will revise the effective date on this page. Material adverse changes will be communicated by reasonable means. Disputes should first be raised through support@skillslot.app for informal resolution. Applicable law and courts are determined by the SkillSlot operator’s location and any mandatory consumer-protection rules that cannot be excluded.',
        },
      ],
      links: [
        { label: { zh: '联系 SkillSlot', en: 'Contact SkillSlot' }, href: '/contact' },
        { label: { zh: '查看隐私政策', en: 'Read the Privacy Policy' }, href: '/privacy' },
      ],
    },
  ],
}

export const refundPage: PublicPageData = {
  eyebrow: { zh: '购买保障', en: 'Purchase protection' },
  title: { zh: '退款政策', en: 'Refund Policy' },
  description: {
    zh: '如果 SkillSlot 不适合你的工作流，可以在购买后的 14 天内申请退款。',
    en: 'If SkillSlot does not fit your workflow, you may request a refund within 14 days of purchase.',
  },
  updated: effectiveDate,
  sections: [
    {
      id: 'eligibility',
      title: { zh: '1. 14 天退款期', en: '1. 14-day refund window' },
      paragraphs: [
        {
          zh: '自 Creem 订单完成之日起 14 个自然日内提交的首次退款请求通常符合退款条件。你的法定消费者权利始终优先，本政策不会减少法律赋予你的权利。',
          en: 'A first refund request submitted within 14 calendar days after the Creem order is completed is normally eligible. Your mandatory consumer rights always take priority, and this policy does not reduce rights granted by law.',
        },
      ],
    },
    {
      id: 'request',
      title: { zh: '2. 如何申请', en: '2. How to request a refund' },
      paragraphs: [
        {
          zh: '请使用购买时的邮箱发送邮件至 support@skillslot.app，并提供 Creem 订单号、购买方案和简短原因。不要发送完整银行卡信息或完整 License Key。我们会在 3 个工作日内回复。',
          en: 'Email support@skillslot.app from the address used for purchase and include the Creem order ID, purchased plan, and a short reason. Do not send complete card details or a full license key. We will respond within 3 business days.',
        },
      ],
      links: [
        { label: { zh: '申请退款', en: 'Request a refund' }, href: 'mailto:support@skillslot.app?subject=SkillSlot%20refund%20request' },
      ],
    },
    {
      id: 'processing',
      title: { zh: '3. 退款处理', en: '3. Refund processing' },
      paragraphs: [
        {
          zh: 'Creem 作为 Merchant of Record 处理退款。批准后，款项会退回原付款方式，到账时间由支付方式和银行决定，通常需要 5 至 10 个工作日。',
          en: 'Creem processes refunds as the Merchant of Record. Once approved, funds are returned to the original payment method. Timing depends on the payment method and bank and typically takes 5 to 10 business days.',
        },
      ],
    },
    {
      id: 'license',
      title: { zh: '4. 退款后的 License', en: '4. License after refund' },
      paragraphs: [
        {
          zh: '退款完成后，对应 License Key 和设备激活会被停用，你应停止使用付费功能。保存在本地的 Skill 文件仍由你管理。',
          en: 'After a refund is completed, the associated license key and device activations are deactivated, and you must stop using paid features. Skill files stored locally remain under your control.',
        },
      ],
    },
    {
      id: 'exceptions',
      title: { zh: '5. 例外与滥用', en: '5. Exceptions and abuse' },
      paragraphs: [
        {
          zh: '超过 14 天的请求会根据产品缺陷、重复扣款、无法交付及适用法律逐案处理。欺诈、重复退款、滥用 License 或违反服务条款的请求可能被拒绝，但这不会影响不可排除的法定权利。',
          en: 'Requests after 14 days are reviewed case by case for product defects, duplicate charges, delivery failures, and applicable law. Requests involving fraud, repeated refunds, license abuse, or Terms violations may be denied, without affecting rights that cannot legally be excluded.',
        },
      ],
    },
    {
      id: 'chargebacks',
      title: { zh: '6. 付款争议', en: '6. Payment disputes' },
      paragraphs: [
        {
          zh: '如果你不认识一笔扣款或订单存在问题，请先联系我们或通过 Creem Customer Portal 寻求帮助。这样通常比直接发起银行卡拒付更快解决问题。',
          en: 'If you do not recognise a charge or have an order problem, contact us or use the Creem Customer Portal first. This will usually resolve the issue faster than filing a card chargeback.',
        },
      ],
    },
    {
      id: 'contact',
      title: { zh: '7. 联系方式', en: '7. Contact' },
      paragraphs: [
        {
          zh: '退款和购买问题请发送至 support@skillslot.app。',
          en: 'For refunds and purchase questions, email support@skillslot.app.',
        },
      ],
      links: [
        { label: { zh: '联系购买支持', en: 'Contact purchase support' }, href: '/contact' },
      ],
    },
  ],
}

export const contactPage: PublicPageData = {
  eyebrow: { zh: '客户支持', en: 'Customer support' },
  title: { zh: '联系我们', en: 'Contact SkillSlot' },
  description: {
    zh: 'License、下载、购买、退款和隐私问题都可以直接联系我们。',
    en: 'Contact us directly about licenses, downloads, purchases, refunds, or privacy.',
  },
  updated: { zh: '支持邮箱：support@skillslot.app', en: 'Support email: support@skillslot.app' },
  sections: [
    {
      id: 'email',
      title: { zh: '发送邮件', en: 'Email support' },
      paragraphs: [
        {
          zh: '请发送至 support@skillslot.app。我们通常会在 3 个工作日内回复。这是 SkillSlot 用于购买收据和客户支持的公开邮箱。',
          en: 'Email support@skillslot.app. We normally respond within 3 business days. This is SkillSlot’s public support address for purchase receipts and customer support.',
        },
      ],
      links: [
        { label: { zh: '发送邮件给 SkillSlot', en: 'Email SkillSlot support' }, href: 'mailto:support@skillslot.app' },
      ],
    },
    {
      id: 'include',
      title: { zh: '为了更快处理，请提供', en: 'To help us respond faster, include' },
      bullets: [
        { zh: '应用版本和 macOS 版本。', en: 'Your app version and macOS version.' },
        { zh: '问题发生前后的操作和错误信息。', en: 'The steps before the problem and any error message.' },
        { zh: '购买问题请提供 Creem 订单号和购买邮箱。', en: 'For purchase issues, the Creem order ID and purchase email.' },
        { zh: 'License 问题只提供 Key 的最后 4 位，不要发送完整 Key。', en: 'For license issues, only the last 4 characters of the key, never the full key.' },
      ],
    },
    {
      id: 'security',
      title: { zh: '安全提醒', en: 'Security reminder' },
      paragraphs: [
        {
          zh: 'SkillSlot 支持不会索要密码、完整银行卡号、API Key 或完整 License Key。请在发送日志和截图前移除个人或项目机密信息。',
          en: 'SkillSlot support will never ask for passwords, complete card numbers, API keys, or a full license key. Remove personal or project secrets before sending logs or screenshots.',
        },
      ],
    },
    {
      id: 'self-service',
      title: { zh: '常用帮助', en: 'Common help' },
      links: [
        { label: { zh: '查看常见问题', en: 'Read the FAQ' }, href: '/#faq' },
        { label: { zh: '查看退款政策', en: 'Read the Refund Policy' }, href: '/refund-policy' },
        { label: { zh: '查看隐私政策', en: 'Read the Privacy Policy' }, href: '/privacy' },
      ],
    },
  ],
}

export const faqPage: PublicPageData = {
  eyebrow: { zh: '购买前后', en: 'Before and after purchase' },
  title: { zh: '常见问题', en: 'Frequently Asked Questions' },
  description: {
    zh: '关于本地数据、试用、License、付款、更新和退款的直接答案。',
    en: 'Direct answers about local data, trials, licenses, payment, updates, and refunds.',
  },
  sections: [
    {
      id: 'what',
      title: { zh: 'SkillSlot 是什么？', en: 'What is SkillSlot?' },
      paragraphs: [
        {
          zh: 'SkillSlot 是一款 macOS Agent Skill 管理工具。它扫描本地 Skills，把它们整理进 Vault，组合成 Loadout，并部署到支持的 AI 编程 Agent 或自定义工作目录。',
          en: 'SkillSlot is a macOS Agent Skill manager. It discovers local Skills, organises them in a Vault, combines them into Loadouts, and deploys them to supported AI coding Agents or custom workspaces.',
        },
      ],
    },
    {
      id: 'local',
      title: { zh: '我的 Skill 数据会上传吗？', en: 'Are my Skill files uploaded?' },
      paragraphs: [
        {
          zh: 'Vault、Loadout 和部署数据主要保存在本地。基础管理和部署不会上传整个 Vault。使用摘要时可能发送相应 SKILL.md 内容，使用 AI 技能地图分类时会发送 Skill 名称、slug 和描述。详情请查看隐私政策。',
          en: 'Vault, Loadout, and deployment data is primarily stored locally. Basic management and deployment do not upload the entire Vault. Summaries may send the relevant SKILL.md content, while AI Skill Map categorization sends Skill names, slugs, and descriptions. See the Privacy Policy for details.',
        },
      ],
      links: [
        { label: { zh: '查看隐私政策', en: 'Read the Privacy Policy' }, href: '/privacy' },
      ],
    },
    {
      id: 'trial',
      title: { zh: '免费试用如何工作？', en: 'How does the free trial work?' },
      paragraphs: [
        {
          zh: '符合条件的 Mac 首次使用可获得 7 天全功能试用，不需要注册账户。试用结束后自动进入 Free Mode，不会自动扣款。',
          en: 'An eligible Mac receives a 7-day full-feature trial without account registration. After the trial, the app moves to Free Mode and you are not charged automatically.',
        },
      ],
    },
    {
      id: 'free-mode',
      title: { zh: 'Free Mode 可以做什么？', en: 'What can I do in Free Mode?' },
      paragraphs: [
        {
          zh: '你可以继续浏览、搜索和查看 Skills，最多导入 10 个 Skills、创建 2 个 Loadout，并部署到一个 Agent。AI 技能地图与分类需要有效试用或 License。',
          en: 'You can continue browsing, searching, and viewing Skills, import up to 10 Skills, create 2 Loadouts, and deploy to one Agent. The AI Skill Map and categorization require an active trial or license.',
        },
      ],
    },
    {
      id: 'license-features',
      title: { zh: 'License 解锁什么？', en: 'What does a license unlock?' },
      paragraphs: [
        {
          zh: 'License 解锁无限 Skill 导入、无限 Loadout、部署到所有支持的 Agent、AI 技能地图，以及 AI 智能生成 Loadout。',
          en: 'A license unlocks unlimited Skill imports, unlimited Loadouts, deployment to every supported Agent, the AI Skill Map, and AI-generated Loadouts.',
        },
      ],
    },
    {
      id: 'devices',
      title: { zh: '1、2、3 Mac 方案有什么区别？', en: 'What is the difference between the 1, 2, and 3 Mac plans?' },
      paragraphs: [
        {
          zh: '功能完全相同，只有同时允许激活的 Mac 数量不同。更换设备前可以在 SkillSlot 的 License 页面停用旧设备，再激活新设备。',
          en: 'The features are identical. Only the number of Macs that can be activated at the same time differs. Before changing devices, deactivate the old Mac from the License page, then activate the new Mac.',
        },
      ],
    },
    {
      id: 'delivery',
      title: { zh: '购买后如何收到 License Key？', en: 'How do I receive my license key?' },
      paragraphs: [
        {
          zh: '付款完成后，Creem 会向结账邮箱发送收据和 License Key。没有看到邮件时，请检查垃圾邮件，并确认搜索来自 Creem 的邮件。仍未收到可以联系支持。',
          en: 'After payment, Creem sends the receipt and license key to the checkout email address. If it is missing, check spam and search for messages from Creem. Contact support if it still has not arrived.',
        },
      ],
      links: [
        { label: { zh: '联系购买支持', en: 'Contact purchase support' }, href: '/contact' },
      ],
    },
    {
      id: 'updates',
      title: { zh: '需要订阅吗？包含更新吗？', en: 'Is there a subscription, and are updates included?' },
      paragraphs: [
        {
          zh: '没有订阅。当前 License 是一次性购买，并包含我们在同一 SkillSlot 产品受支持期间公开发布的更新。它不承诺特定未来功能或无限期持续开发。',
          en: 'There is no subscription. The current license is a one-time purchase and includes updates publicly released for the same SkillSlot product while it remains supported. It does not promise particular future features or development for an unlimited period.',
        },
      ],
    },
    {
      id: 'payments',
      title: { zh: '谁处理付款、税费和发票？', en: 'Who handles payment, tax, and invoices?' },
      paragraphs: [
        {
          zh: 'Creem 是 Merchant of Record，负责结账、付款方式、税费和发票。结账页会在付款前显示最终金额。',
          en: 'Creem is the Merchant of Record and handles checkout, payment methods, tax, and invoices. The final amount is shown before payment.',
        },
      ],
      links: [
        { label: { zh: 'Creem Buyer Terms', en: 'Creem Buyer Terms' }, href: 'https://www.creem.io/buyer-terms', external: true },
      ],
    },
    {
      id: 'refund',
      title: { zh: '可以退款吗？', en: 'Can I request a refund?' },
      paragraphs: [
        {
          zh: '可以。购买后 14 天内发送邮件至 support@skillslot.app 申请退款。退款会由 Creem 退回原付款方式，相应 License 会停用。',
          en: 'Yes. Email support@skillslot.app within 14 days of purchase to request a refund. Creem returns approved refunds to the original payment method, and the associated license is deactivated.',
        },
      ],
      links: [
        { label: { zh: '查看退款政策', en: 'Read the Refund Policy' }, href: '/refund-policy' },
      ],
    },
  ],
}
