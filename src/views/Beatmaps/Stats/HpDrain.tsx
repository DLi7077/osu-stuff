import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function HpDrain(props: { theme: ColorTheme }) {
  const getBack = {
    hp5: require("../../../assets/videos/hp-drains/GET-BACK-hp-5.mp4"),
    hp9: require("../../../assets/videos/hp-drains/GET-BACK-hp-9.mp4"),
  };
  return (
    <Section theme={props.theme} subtitle="HP Drain Rate (HP)">
      <>
        HP Drain rate refers to how quickly you lose health while playing the
        beatmap
        <br />
        <br />
        The larger this value is, the faster you lose health.
        <br />
        Hitting notes restore health according to the points you acquire, and
        missing will lose health.
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Video
            source={getBack.hp5}
            caption="GET BACK / THE ORAL CIGARETTES (HP : 5)"
          />
          <Video
            source={getBack.hp9}
            caption="GET BACK / THE ORAL CIGARETTES (HP : 9)"
          />
        </div>
        <br />
        HP : 5 failed on the 8th note, and HP : 9 failed on the 5th note.
      </>
    </Section>
  );
}
