import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function CircleSize(props: { theme: ColorTheme }) {
  const kaikaiKitan = {
    cs4: require("../../../assets/videos/circle-sizes/kaikai-kitan-cs-4.mp4"),
    cs6: require("../../../assets/videos/circle-sizes/kaikai-kitan-cs-6.mp4"),
  };
  return (
    <Section theme={props.theme} subtitle="Circle Size (CS)">
      <>
        Circle Size refers to the difficulty of clicking on a circle.
        <br />
        <br />
        The larger this value is, the smaller the circle gets.
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Video source={kaikaiKitan.cs4} caption="廻廻奇譚 / Eve (CS : 4)" />
          <Video source={kaikaiKitan.cs6} caption="廻廻奇譚 / Eve (CS : 6)" />
        </div>
      </>
    </Section>
  );
}
