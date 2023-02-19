import Section from "../../../components/Section";
import ImageDemo from "../../../components/ImageDemo";
import Video from "../../../components/Video";

export default function Streams(props: { theme: ColorTheme }) {
  const tadakoeDemo = require("../../../assets/videos/mou-ii-kai.mp4");
  return (
    <Section theme={props.theme} subtitle="Streams">
      <>
        Streams are just like bursts, except they are much longer and requires
        you to move your cursor extensively while you clear the notes.
        <br />
        <br />
        This pattern is very difficult to clear. It requires consistent mouse
        movement, consistent pacing on key tapping, and an ability to read
        overlapping notes.
        <br />
        <br />
        The normal way to clear it is to spam keys by alternating your fingers
        while moving your cursor - easier said than done. 99% of streams are on
        a fixed BPM so your fingers need to become a metronome to clear it
        perfectly.
        <br />
        <br />
        <div className="align-down-center">
          <div>A Beatmap that starts with a lot of streams:</div>
          <Video
            source={tadakoeDemo}
            caption="もういいかい？ / THE ORAL CIGARETTES"
            style={{ width: "600px" }}
          />
        </div>
      </>
    </Section>
  );
}
