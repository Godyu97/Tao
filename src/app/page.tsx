import Link from "next/link";
import { Header, Footer } from "@/components/shell";

export default function Home() {
  return <><Header /><main className="page-wrap">
    <section className="home-hero">
      <div><p className="eyebrow">TAO TE CHING · A QUIET MOMENT</p><h1>把脚步放慢，<br />让<em>智慧</em>发生。</h1><p className="hero-description">不急着读懂世界，先留一点时间给自己。<br />在古老的文字里，找到从容生活的另一种可能。</p><Link href="/zh/chapters/38" className="button">从第三十八章开始 <span>↗</span></Link><p className="hero-meta">原文 · 白话 · 深解 &nbsp; / &nbsp; 中文与 English</p></div>
      <div className="hero-art" role="img" aria-label="柔和日光下的山丘与涟漪，象征顺其自然">
        <svg viewBox="0 0 500 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="hill" x2="0" y2="1"><stop stopColor="#9da97e" /><stop offset="1" stopColor="#c2caaa" /></linearGradient><radialGradient id="sun"><stop stopColor="#fffdf0" /><stop offset="1" stopColor="#f6f0c9" /></radialGradient></defs><circle cx="310" cy="125" r="65" fill="url(#sun)" /><path d="M-50 290 Q105 125 270 285 T570 255V500H-50Z" fill="url(#hill)" /><path d="M-80 355 Q160 230 330 325 T600 300V480H-80Z" fill="#d5dcc0" /><path d="M-40 382 Q190 285 540 375V460H-40Z" fill="#e7e9d6" /><g fill="none" stroke="#94a47a" strokeWidth="1" opacity=".6"><ellipse cx="276" cy="358" rx="74" ry="13" /><ellipse cx="276" cy="358" rx="105" ry="20" /><ellipse cx="276" cy="358" rx="138" ry="28" /></g><path d="M252 353 Q251 330 278 329 Q302 331 301 353Z" fill="#6e7d58" /><path d="M75 124q15-12 26 0m1 0q14-12 26 0" fill="none" stroke="#7d8d65" strokeWidth="1.5" /></svg>
        <span className="art-seal">不争 · 自在</span><span className="art-caption">LESS FORCE. MORE FLOW.</span>
      </div>
    </section>
    <section id="chapters" className="chapter-directory"><div className="section-top"><h2>一章，一点新的体会。</h2><span>阅读目录 &nbsp; / &nbsp; 目前收录 1 章</span></div><article className="chapter-card"><span className="chapter-number">38</span><div><p className="chapter-tag">通行本 · 第七十三章</p><h3>天网 <span lang="en">Heaven’s Net</span></h3><p className="chapter-description">真正的勇敢，也包括有所不为。<br />关于克制、不争，以及与自然规律相处的智慧。</p></div><div className="chapter-links"><Link className="button" href="/zh/chapters/38">中文阅读 ↗</Link><Link className="pill" href="/en/chapters/38" lang="en">English ↗</Link></div></article></section>
    <section className="home-closing"><blockquote>“天網恢恢，疏而不失。”</blockquote><p>留一点空间，让万物自然生长。</p></section>
  </main><Footer /></>;
}
