import { Metadata } from "next";
import { openGraphData } from "../shared-metadata";
import { YouTubeEmbed } from "@next/third-parties/google";
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

export default function Works() {
  return (
    <div className="container mx-auto min-w-[350px] max-w-3xl px-8 md:px-12 pt-12 pb-16 flex flex-col">
      <div>
        <Menu current="Works" />
      </div>
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10">Works</h1>
        <VideoElement caption={"#Vocal #R'n'B"}>
          <YouTubeEmbed
            videoid="j1uetax0kW4"
            style="max-width: 480px;"
            params="color=white"
          />
        </VideoElement>
        <VideoElement caption={"#Instrumental #Jazz"}>
          <YouTubeEmbed
            videoid="frLCVRy_-NA"
            style="max-width: 480px;"
            params="color=white"
          />
        </VideoElement>
        <VideoElement caption={"#Play #Jazz"}>
          <YouTubeEmbed
            videoid="lE3_rm5g7yE"
            style="max-width: 480px;"
            params="color=white"
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
