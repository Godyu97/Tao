import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "慢读 · 道德经", template: "%s — 慢读 · 道德经" },
  description: "一章一读，在古老的文字里，找回思考的余地。道德经中英双语阅读。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
