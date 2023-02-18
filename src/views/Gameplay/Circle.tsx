import notYet from "../../assets/images/gameplay/circles/50.gif";
import miss from "../../assets/images/gameplay/circles/miss.gif";
import almost from "../../assets/images/gameplay/circles/100.gif";
import perfect from "../../assets/images/gameplay/circles/300.gif";
import Section from "../../components/Section";
import ImageDemo from "./ImageDemo";

export default function Circle(props: { theme: ColorTheme }) {
  const DEMO_IMAGE_SIZE = "164px";
  const demos = [
    { source: miss, caption: "Miss" },
    { source: notYet, caption: "50" },
    { source: almost, caption: "100" },
    { source: perfect, caption: "300" },
  ];
  return (
    <Section theme={props.theme} subtitle="Circle">
      <>
        Every circle comes with an approach circle. When the approach circle
        touches the other ring of the inner circle, that's your cue to hit it.
        Hover your mouse over the circle and click on it. Depending on your
        timing, you will be awarded up to 300 score points.
        <br />
        <br />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {demos.map((demo) => (
            <ImageDemo
              source={demo.source}
              caption={demo.caption}
              style={{
                width: DEMO_IMAGE_SIZE,
                height: DEMO_IMAGE_SIZE,
                borderRadius: "100%",
              }}
            />
          ))}
        </div>
        <br />
        If a hit granted you anything less than 300 points, then you've either
        hit it too quickly or too slowly.
      </>
    </Section>
  );
}
