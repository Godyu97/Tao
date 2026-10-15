import Link from "next/link";

export function Header({ english = false }: { english?: boolean }) {
  return <header className="site-header">
    <Link href="/" className="brand"><span className="brand-mark" lang="zh">道</span><span>{english ? "The Tao, slowly" : "慢读 · 道德经"}</span></Link>
    <nav aria-label={english ? "Main navigation" : "主导航"} className="site-nav">
      <Link href="/#chapters">{english ? "Chapters" : "章节目录"}</Link>
      <Link className="pill" href={english ? "/zh/chapters/38" : "/en/chapters/38"} lang={english ? "zh-CN" : "en"} hrefLang={english ? "zh-CN" : "en"}>{english ? "中文 ↗" : "English ↗"}</Link>
    </nav>
  </header>;
}

export function Footer({ english = false }: { english?: boolean }) {
  return <footer className="site-footer"><span>{english ? "The Tao, slowly" : "慢读 · 道德经"}</span><span>{english ? "Ancient wisdom. A little room to breathe." : "古老的智慧，日常的回响。"}</span></footer>;
}
