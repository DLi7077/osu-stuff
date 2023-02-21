import ImageDemo from "../../../components/ImageDemo";
import Section from "../../../components/Section";
import beatmapHeader from "../../../assets/images/beatmaps/info.png";

export default function BpmObjects(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Beatmap content">
      <>
        Every beatmap has a few basic contents shown on the top of the in-game
        song selection screen:
        <ul>
          <li>Length : the beatmap duration (usually same as song)</li>
          <li>BPM : Beats Per Minute - the rhythm pace</li>
          <li>
            Object : the amount of Circles, Sliders, and Spinners spawned in the
            beatmap
          </li>
        </ul>
        The beatmap shown below has:
        <br />
        - a duration of 95 seconds
        <br />
        - a variable BPM of between 148 to 170 (avg 168)
        <br />
        - a total of 385 objects (257 Circles + 128 Sliders + 0 Spinners)
        <br />
        <br />
        <ImageDemo source={beatmapHeader} style={{ objectFit: "contain" }} />
      </>
    </Section>
  );
}
