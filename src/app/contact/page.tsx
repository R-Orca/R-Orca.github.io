import { Metadata } from "next";
import { Menu } from "@/components/menu";

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <div className="container mx-auto min-w-[360px] max-w-3xl h-[max(100dvh,625px)] px-8 md:px-12 pb-16 pt-12 flex flex-col">
      <div>
        <Menu current="Contact" />
      </div>
      <div className="flex-grow"></div>
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10">Contact</h1>
        <p className="font-normal">
          楽曲制作/アレンジ、演奏、レッスン承ります。XのDM、またはメールにてお気軽にご相談ください。見積もりは無料にて承ります。
        </p>
        <div className="font-normal">
          <ul className="list-none mb-4">
            <li><a href="https://x.com/Maburagi" className="underline hover:opacity-75">X(DM)：@Maburagi</a></li>
            <li>メール：Maburagi*gmail.com</li>
          </ul>
          <div className="text-sm">
            ※ 数日以内に返信がない場合、お手数ですがもう片方の連絡先までご連絡ください。
          </div>
        </div>
      </div>
    </div>
  );
}
