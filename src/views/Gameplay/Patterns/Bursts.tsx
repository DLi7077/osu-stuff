import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function Bursts(props: { theme: ColorTheme }) {
  const tadakoeDemo = require("../../../assets/videos/koetada-hitotsu.mp4");
  return (
    <Section theme={props.theme} subtitle="Bursts">
      <>
        Bursts are a group of circles overlapping each other.
        <br />
        An easy way to clear these is to spam keys by alternating fingers
        quickly. If your hit keys are "Z" and "X", you would quickly hit "ZXZX"
        to clear the pattern.
        <br />
        It helps to listen to the music to gauge the burst timing
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
