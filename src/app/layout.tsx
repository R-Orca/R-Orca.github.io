import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
};
// #ToDo: MetadataBaseのルートURLの確認(github pages)
// https://ja.next-community-docs.dev/docs/app-router/api-reference/functions/generate-metadata#metadata-object
// openGraph の記載

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
