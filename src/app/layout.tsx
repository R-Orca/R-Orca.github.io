import type { Metadata } from "next";
import { M_PLUS_2 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { openGraphData } from "./shared-metadata";
import "./globals.css";

const m_plus2 = M_PLUS_2({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mplus2",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaburagi.me'),
  title: {
    template: "%s | Kaburagi.M / Composer & Pianist",
    default: "Kaburagi.M / Composer & Pianist",
  },
  description: "作曲家&ピアニスト Kaburagi.M のホームページ",
  authors: [{ name: "Kaburagi.M", url: "https://kaburagi.me/" }],
  creator: "Kaburagi.M",
  publisher: "Kaburagi.M",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: {
      template: "%s | Kaburagi.M / Composer & Pianist",
      default: "Kaburagi.M / Composer & Pianist",
    },
    ...openGraphData,
  },

  twitter: {
    description: '作曲家&ピアニスト Kaburagi.M のホームページ',
    card: "summary_large_image",
    site: '@maburagi',
    creator: '@maburagi',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${m_plus2.className} font-medium bg-dark text-bright`}>{children}</body>
      <GoogleAnalytics gaId="G-464JXD6G42" />
    </html>
  );
}
