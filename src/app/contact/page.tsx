import { Menu } from "@/components/menu";

export default function Contact() {
  return (
    <div className="container mx-auto max-w-5xl h-dvh px-8 pb-16 pt-12 flex flex-col">
      <div>
        <Menu />
      </div>
      <div className="flex-grow"></div>
      <div className="space-y-4">
        <h1 className="text-5xl mb-8">Contact</h1>
        <p>
          楽曲制作/アレンジ、演奏、レッスン承ります。XのDM、またはメールにてお気軽にご相談ください。見積もりは無料にて承ります。
        </p>
        <ul className="list-none">
          <li>X：@Maburagi</li>
          <li>メール：Maburagi gmail.com</li>
        </ul>
        <div className="text-sm">
          ※ 数日以内に返信がない場合、お手数ですがもう片方の連絡先までご連絡ください。
        </div>
      </div>
    </div>
  );
}
