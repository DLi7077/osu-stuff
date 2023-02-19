import React from "react";
import Section from "../../../components/Section";
import burstGif from "../../../assets/images/gameplay/patterns/burst.gif";
import ImageDemo from "../../../components/ImageDemo";
import Video from "../../../components/Video";

export default function Bursts(props: { theme: ColorTheme }) {
  const tadakoeDemo = require("../../../assets/videos/koetada-hitotsu.mp4");
  return (
    <Section theme={props.theme} subtitle="Bursts">
      <>
        Bursts are a group of circles overlapping each other.
        <br />
        An easy way to clear these is to quickly hit your keys while alternating
        fingers. If your hit keys are "Z" and "X", you would quickly hit "ZXZX"
        to clear the pattern.
        <br />
        <br />
        <div className="align-down-center">
          <ImageDemo
            source={burstGif}
            caption="skrrat"
            style={{ width: "240px" }}
          />
        </div>
        <br />
        <br />
        <div className="align-down-center">
          <div>A Beatmap that starts with a lot of bursts:</div>
          <Video
            source={tadakoeDemo}
            caption="ただ声一つ / ロクデナシ"
            style={{ width: "600px" }}
          />
        </div>
      </>
    </Section>
  );
}
