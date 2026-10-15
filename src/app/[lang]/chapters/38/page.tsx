import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import chapters from "../../../../../content/chapter-38.json";
import { Header, Footer } from "@/components/shell";
import { Reader } from "@/components/reader";

type Props = { params: Promise<{ lang: string }> };
export function generateStaticParams() { return [{ lang: "zh" }, { lang: "en" }]; }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "en" ? "Chapter 38 · Heaven’s Net" : "第三十八章 · 天网", alternates: { languages: { "zh-CN": "/zh/chapters/38", en: "/en/chapters/38" } } };
}
export default async function Chapter({ params }: Props) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en") notFound();
  const english = lang === "en";
  return <div lang={english ? "en" : "zh-CN"}>
    <Header english={english} />
    <main className="page-wrap">
      <div className="reading-top"><Link href="/">{english ? "← Home" : "← 返回首页"}</Link><span>{english ? "Chapter 38 / Received chapter 73" : "第三十八章 / 通行本第七十三章"}</span></div>
      <div className="reading-heading"><p className="eyebrow">CHAPTER 38 · HEAVEN’S NET</p><h1>{english ? "Heaven’s Net" : "天网"}</h1><p>{english ? "To act takes strength. To refrain can take mastery of that strength." : "敢于行动是力量，敢于不行动是对力量的驾驭。"}<br />{english ? "A quiet invitation to explore the courage of restraint." : "读懂“勇于不敢”，也许是学会从容的开始。"}</p></div>
      <Reader sections={chapters[lang]} english={english} />
      <div className="end-nav"><Link href="/#chapters">{english ? "← Back to chapters" : "← 返回章节目录"}</Link><Link href={english ? "/zh/chapters/38" : "/en/chapters/38"} lang={english ? "zh-CN" : "en"}>{english ? "阅读中文版 ↗" : "Read in English ↗"}</Link></div>
    </main><Footer english={english} />
  </div>;
}
