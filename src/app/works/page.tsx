import { Metadata } from "next";
import { openGraphData } from "../shared-metadata";
import { YouTubeEmbed as NextYouTubeEmbed } from "@next/third-parties/google";
import type { ComponentProps } from "react";
import { Menu } from "@/components/menu";
import { VideoElement } from "@/components/videoElement";
import Youtube from "/public/youtube.svg";

const TITLE = 'Works'

export const metadata: Metadata = {
  title: TITLE,

  openGraph: {
    title: TITLE,
    ...openGraphData
  }
}

function YouTubeEmbed({
  style = "max-width: 480px;",
  params = "color=white",
  ...props
}: ComponentProps<typeof NextYouTubeEmbed>) {
  return <NextYouTubeEmbed {...props} style={style} params={params} />;
}

export default function Works() {
  return (
    <div className="container mx-auto min-w-[350px] max-w-3xl px-8 md:px-12 pt-12 pb-16 flex flex-col">
      <div>
        <Menu current="Works" />
      </div>
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10">Works</h1>
        <VideoElement caption={"#Vocal #Dance #Jazz"}>
          <YouTubeEmbed
            /* LOCK OUT */
            videoid="k_WuV0SasgU"
          />
        </VideoElement>
        <VideoElement caption={"#Vocal #Rock"}>
          <YouTubeEmbed
            /* カンテラ */
            videoid="-S_LT3gc1uU"
          />
        </VideoElement>
        <VideoElement caption={"#Vocal #Pop"}>
          <YouTubeEmbed
            /* クローバー */
            videoid="pmoZXNYYffA"
          />
        </VideoElement>
        <VideoElement caption={"#Vocal #Jazz"}>
          <YouTubeEmbed
            /* Magic Hour */
            videoid="x5-0NrJa8uo"
          />
        </VideoElement>
        <VideoElement caption={"#Game #Battle"}>
          <YouTubeEmbed
            /* WHITEOUT - Boss */
            videoid="cpewAxLbPB4"
          />
        </VideoElement>
          <VideoElement caption={"#Game #Vocal #Pop"}>
          <YouTubeEmbed
            /* 03. レプリカ */
            videoid="m2WpEKaHXgs"
          />
        </VideoElement>
        <VideoElement caption={"#Play #Jazz"}>
          <YouTubeEmbed
            /* There Will Never Be Another You */
            videoid="lE3_rm5g7yE"
          />
        </VideoElement>
        <div className="flex">
          <a
            className="flex space-x-2 pr-4 text-clickable hover:opacity-75"
            href="https://www.youtube.com/@Ka.M/videos"
          >
            <div className="align-middle font-normal">More works &gt;</div>
            <Youtube width="24" height="24" className="mt-[2px]" />
          </a>
          <div className="flex-auto"></div>
        </div>
      </div>
    </div>
  );
}
