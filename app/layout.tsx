import type { Metadata } from "next";
import "@fontsource-variable/jost";
import "@fontsource-variable/jost/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Signal — партнёрская программа",
  description:
    "Профессиональное quant-соревнование и система поиска талантов для компаний-партнёров.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "./favicon.svg",
    shortcut: "./favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
