/**
 * Site Configuration
 *
 * All text content and contact information for the Math Hackathon website.
 * Edit this file to update the website content without touching page components.
 */

export const siteConfig = {
  // Basic Info
  siteName: "Math Hackathon",
  siteTagline: "创造无限可能！",

  // Hero Section
  hero: {
    badge: "2026 · 数学 × 黑客松",
    title: "Math Hackathon",
    titleHighlight: "2026",
    description:
      "一场前所未有的比赛。数学建模与黑客松的融合。参赛者不仅提交论文，还要展示真实可运行的 Demo。",
    ctaText: "成为共创者",
  },

  // Why Section
  why: {
    title: "为什么是 Math Hackathon？",
    description:
      "数学建模竞赛已有三十年历史，但从未真正拥抱 Hackathon 的形式。在 AI 时代，我们认为现在是时候了。",
    cards: [
      {
        number: "01",
        title: "从论文到 Demo",
        description:
          "参赛者需要在 72 小时内完成分析、建模、算法、代码与论文，最后在现场展示真实可运行的解决方案。",
      },
      {
        number: "02",
        title: "AI 改变了一切",
        description:
          "大语言模型改变推理方式，AI Agent 改变开发方式，生成式 AI 改变人们理解复杂问题的方式。",
      },
      {
        number: "03",
        title: "连接现实世界",
        description:
          "数学来源于生活，也终将回归于生活。Math Hackathon 是连接两者的桥梁。",
      },
    ],
  },

  // Roles Section
  roles: {
    title: "我们正在寻找共创者",
    description:
      "在正式启动赛事之前，我们希望找到第一批相信这件事情的人。",
    items: [
      {
        id: "linker",
        title: "链接者",
        subtitle: "Linker",
        color: "#22C55E",
        icon: "Users",
        description: "负责赛事的策划、宣传、组织与运营。",
        skills: ["社区运营", "活动策划", "品牌传播", "高校联络"],
        benefits: [
          "与优秀伙伴共同打造创新赛事",
          "丰富的大型活动组织经验",
          "与高校、企业深度连接",
        ],
      },
      {
        id: "builder",
        title: "共建者",
        subtitle: "Builder",
        color: "#3B82F6",
        icon: "MessageSquareCode",
        description: "愿意与我们共同打造赛事生态的合作伙伴。",
        skills: ["AI 社区", "开源社区", "高校组织", "科研机构"],
        benefits: [
          "赛事中的品牌展示与传播",
          "与开发者建立连接的平台",
          "参与赛事内容设计与共创",
        ],
      },
      {
        id: "sponsor",
        title: "赞助者",
        subtitle: "Sponsor",
        color: "#FBBF24",
        icon: "Handshake",
        description: "支持创新、助力未来的赛事合作伙伴。",
        skills: ["AI 与科技创新", "人才发现与培养", "高校生态建设", "开发者社区"],
        benefits: [
          "面向高校与开发者的品牌曝光",
          "与优秀人才面对面交流",
          "创新解决方案与项目成果",
        ],
      },
    ],
  },

  // CTA Section
  cta: {
    title: "如果你愿意成为共创者",
    description: "欢迎联系我们。一起将 Math Hackathon 从一个想法变成现实。",
    buttonText: "发送邮件",
    email: "clover@mathhackathon.com",
  },

  // Footer
  footer: {
    quickLinks: [
      { label: "共创者", href: "#roles" },
      { label: "联系我们", href: "#contact" },
    ],
    social: ["敬请期待"],
    copyright: "© 2026 Math Hackathon. All rights reserved.",
  },
};

export type SiteConfig = typeof siteConfig;
