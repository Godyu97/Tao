"use client";

import { useEffect, useRef, useState } from "react";

export function Reader({ sections, english }: { sections: { id: string; html: string }[]; english: boolean }) {
  const [size, setSize] = useState(18);
  const [active, setActive] = useState("original");
  const article = useRef<HTMLElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let saved = 18;
    try { saved = Math.max(16, Math.min(24, Number(localStorage.getItem("tao-font-size")) || 18)); } catch {}
    const frame = requestAnimationFrame(() => setSize(saved));
    const update = () => {
      const length = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.width = `${length > 0 ? Math.max(0, Math.min(100, scrollY / length * 100)) : 0}%`;
      const nodes = article.current?.querySelectorAll("section");
      let current = "original";
      nodes?.forEach(node => { if (node.getBoundingClientRect().top <= 180) current = node.id; });
      if (length > 0 && scrollY >= length - 2 && nodes?.length) current = nodes[nodes.length - 1].id;
      setActive(current);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    if (article.current) observer.observe(article.current);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", update); removeEventListener("resize", update); observer.disconnect(); };
  }, []);
  function resize(delta: number) {
    const next = Math.max(16, Math.min(24, size + delta));
    setSize(next);
    try { localStorage.setItem("tao-font-size", String(next)); } catch {}
  }
  const labels = english ? ["The text", "In plain words", "A closer reading", "Three insights", "Reflection"] : ["原文", "白话翻译", "逐句深解", "三层启示", "延伸思考"];
  return <div className="reading-layout">
    <div ref={bar} aria-hidden="true" className="reading-progress" />
    <aside className="reading-sidebar">
      <p className="toc-label">{english ? "ON THIS PAGE" : "本章阅读 · ON THIS PAGE"}</p>
      <nav aria-label={english ? "On this page" : "本章目录"} className="reading-toc">
        {sections.map((section, i) => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}><span>0{i + 1}</span>{labels[i]}</a>)}
      </nav>
      <div role="group" aria-label={english ? "Reading text size" : "正文字号"} className="reading-tools">
        <button onClick={() => resize(-1)} disabled={size <= 16} aria-label={english ? "Decrease text size" : "缩小字号"}>A−</button>
        <span aria-live="polite">{size}</span>
        <button onClick={() => resize(1)} disabled={size >= 24} aria-label={english ? "Increase text size" : "放大字号"}>A+</button>
      </div>
    </aside>
    <article ref={article} style={{ fontSize: `${size}px` }} className="reading-article">
      {sections.map(section => <section key={section.id} id={section.id} dangerouslySetInnerHTML={{ __html: section.html }} />)}
    </article>
  </div>;
}
