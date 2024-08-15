import { Menu } from "@/components/menu";
import Youtube from "/public/youtube.svg";
import X from "/public/x.svg";
import Note from "/public/note.svg";
import Instagram from "/public/instagram.svg";
import { LinkElement } from "@/components/linkElement";

export default function Links() {
  return (
    <div className="container mx-auto min-w-[360px] max-w-3xl h-[max(100dvh,600px)] px-8 pb-16 pt-12 flex flex-col">
      <div>
        <Menu />
      </div>
      <div className="flex-grow"></div>
      <div className="space-y-8">
        <h1 className="text-5xl mb-10">Links</h1>
        <LinkElement title="@Ka.M" caption="楽曲投稿・配信" url="https://www.youtube.com/@Ka.M">
          <Youtube width="32" height="32" />
        </LinkElement>
        <LinkElement title="@Maburagi" caption="日常・宣伝・告知" url="https://x.com/Maburagi">
          <X width="32" height="32" />
        </LinkElement>
        <LinkElement title="@Maburagi" caption="技術・趣味・回顧" url="https://note.com/Maburagi/">
          <Note width="32" height="32" />
        </LinkElement>
        <LinkElement title="@ka.buragi.m" caption="音楽・写真" url="https://www.instagram.com/ka.buragi.m/">
          <Instagram width="32" height="32" />
        </LinkElement>
      </div>
    </div>
  );
}
