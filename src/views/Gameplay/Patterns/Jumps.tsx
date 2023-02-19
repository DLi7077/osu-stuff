import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function Jumps(props: { theme: ColorTheme }) {
  const tadakoeDemo = require("../../../assets/videos/my-dearest.mp4");
  return (
    <Section theme={props.theme} subtitle="Jumps">
      <>
        Whenever you move from one note to another with some distance between
        them, that movement is considered as a <b>jump</b>.
        <br />
        Jumps (plural) refer to a sequence of notes that spawn relatively
        distant from each other and require a quick <b>jump</b> to hit each of
        them sequentially.
        <br />
        <br />
        Unlike streams, the BPM isn't as fast, and the notes are spaced apart
        instead of near each other.
        <br />
        Clearing this pattern requires fast reflexes, awareness to all sections
        of the game screen, and accurate cursor placement.
        <br />
        <br />
        <div className="align-down-center">
          <div>A Beatmap that ends with a lot of jumps:</div>
          <Video
            source={tadakoeDemo}
            caption="My Dearest / Supercell"
            style={{ width: "600px" }}
            volume={0.3}
          />
        </div>
      </>
    </Section>
  );
}
