import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cpu, Link2, Users, MessageSquareCode, Handshake, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

// Map icon names to lucide-react components
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Users,
  MessageSquareCode,
  Handshake,
};

/**
 * Math Hackathon - Official Website
 *
 * Design System: Cosmic Minimalist
 * - Typography: Playfair Display (headings) + Lato (body) + IBM Plex Mono (accents)
 * - Colors: Deep Navy primary, Vibrant Orange accent
 * - Roles: Green (Linker), Blue (Builder), Gold (Sponsor)
 * - Theme: Space-inspired with subtle gradients and cosmic decorations
 */

export default function Home() {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const problemCards = [
    { number: "01", title: "从论文到 Demo", description: "参赛者需要在 72 小时内完成分析、建模、算法、代码与论文，最后在现场展示真实可运行的解决方案。", icon: Cpu },
    { number: "02", title: "AI 改变了一切", description: "大语言模型改变推理方式，AI Agent 改变开发方式，生成式 AI 改变人们理解复杂问题的方式。", icon: Sparkles },
    { number: "03", title: "连接现实世界", description: "数学来源于生活，也终将回归于生活。Math Hackathon 是连接两者的桥梁。", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/cosmic.png" alt="Cosmic Logo" className="w-10 h-10" />
            <span className="text-lg font-bold text-foreground tracking-tight">{siteConfig.siteName}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#roles" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-medium">共创者</a>
            <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-medium">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden cosmic-bg-hero">
        {/* Cosmic decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-4xl">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8 font-mono-accent">
              <Sparkles size={14} />
              <span>{siteConfig.hero.badge}</span>
            </div>

            <h1 className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-bold font-mono-accent text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {siteConfig.hero.title}
              </span>
              <span className="font-bold font-mono-accent text-accent text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                {siteConfig.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-14 leading-relaxed max-w-2xl font-light">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="btn-accent inline-flex items-center gap-2 text-base h-12 px-8"
              >
                <a href={`mailto:${siteConfig.cta.email}`}>
                  {siteConfig.hero.ctaText} <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-spacing cosmic-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono-accent text-foreground mb-6 tracking-tight">
              {siteConfig.why.title}
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              {siteConfig.why.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problemCards.map((card) => (
              <div
                key={card.number}
                className="card-minimal group hover:-translate-y-1"
                style={{ borderTop: "3px solid #FF6B35" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <card.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono-accent text-sm font-semibold text-accent/70">{card.number}</span>
                </div>
                <h3 className="text-xl font-bold font-mono-accent text-foreground mb-4 tracking-tight">{card.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono-accent text-foreground mb-6 tracking-tight">
              {siteConfig.roles.title}
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {siteConfig.roles.description}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {siteConfig.roles.items.map((role) => {
              const IconComponent = iconMap[role.icon] || Users;
              return (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl border border-border/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    boxShadow:
                      hoveredRole === role.id
                        ? `0 25px 50px -12px ${role.color}15, 0 10px 20px -5px rgba(0,0,0,0.05)`
                        : "0 1px 3px rgba(0, 0, 0, 0.04)",
                    borderLeft: `4px solid ${role.color}`,
                  }}
                  onMouseEnter={() => setHoveredRole(role.id)}
                  onMouseLeave={() => setHoveredRole(null)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - Title and Description */}
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="p-3 rounded-xl"
                          style={{ backgroundColor: `${role.color}15` }}
                        >
                          <IconComponent
                            size={28}
                            strokeWidth={1.5}
                            style={{ color: role.color }}
                          />
                        </div>
                        <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden">
                          <h3 className="text-3xl md:text-4xl font-bold font-mono-accent tracking-tight" style={{ color: role.color }}>
                            {role.title}
                          </h3>
                          <span className="text-3xl md:text-4xl font-bold font-mono-accent tracking-tight flex-shrink-0" style={{ color: role.color }}>｜{role.subtitle}</span>
                        </div>
                      </div>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Right side - Skills and Benefits */}
                    <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-secondary/20 to-transparent">
                      <div className="mb-10">
                        <p className="font-bold text-sm uppercase tracking-widest text-foreground/40 mb-5">你的专长</p>
                        <div className="flex flex-wrap gap-2.5">
                          {role.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300"
                              style={{
                                borderColor: `${role.color}30`,
                                color: role.color,
                                backgroundColor: `${role.color}08`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-border/60">
                        <p className="font-bold text-sm uppercase tracking-widest text-foreground/40 mb-5">你将获得</p>
                        <ul className="space-y-4">
                          {role.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3.5 text-base text-foreground/70">
                              <span
                                className="mt-1.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                                style={{ backgroundColor: role.color }}
                              >
                                ✓
                              </span>
                              <span className="leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative overflow-hidden bg-white">
        {/* Subtle cosmic background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(15,23,42,0.06) 0%, transparent 70%)" }}
          />
          <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
          />
        </div>

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono-accent text-foreground mb-8 tracking-tight">
              {siteConfig.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 mb-14 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="btn-accent inline-flex items-center gap-2 h-12 text-base px-10"
              >
                <a href={`mailto:${siteConfig.cta.email}`}>
                  <MessageSquareCode size={18} />
                  {siteConfig.cta.buttonText} <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-foreground py-16 md:py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img src="/cosmic.png" alt="Cosmic Logo" className="w-8 h-8" />
                <span className="text-lg font-bold text-foreground tracking-tight">{siteConfig.siteName}</span>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {siteConfig.siteTagline}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold font-mono-accent text-foreground mb-5 text-sm uppercase tracking-wider">快速链接</h4>
              <ul className="space-y-3 text-sm">
                {siteConfig.footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-foreground/50 hover:text-foreground transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold font-mono-accent text-foreground mb-5 text-sm uppercase tracking-wider">社交媒体</h4>
              <ul className="space-y-3 text-sm">
                {siteConfig.footer.social.map((item) => (
                  <li key={item}>
                    <span className="text-foreground/40 cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold font-mono-accent text-foreground mb-5 text-sm uppercase tracking-wider">联系我们</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.cta.email}`}
                    className="text-foreground/50 hover:text-accent transition-colors duration-300"
                  >
                    {siteConfig.cta.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-10 text-center">
            <p className="text-sm text-foreground/40">
              {siteConfig.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
