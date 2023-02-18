import Section from "../../components/Section";
import notYet from "../../assets/images/gameplay/circles/50.gif";
import miss from "../../assets/images/gameplay/circles/miss.gif";
import almost from "../../assets/images/gameplay/circles/100.gif";
import perfect from "../../assets/images/gameplay/circles/300.gif";
import "../../index.css";

function ImageDemo(props: { source: any; caption: string }): JSX.Element {
  return (
    <div className="align-down-center" style={{ gap: "0.25rem" }}>
      <img
        src={props.source}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "40px",
        }}
        alt={props.caption}
      />
      <div>{props.caption}</div>
    </div>
  );
}

function Gameplay(props: { theme?: ColorTheme }) {
  const { theme } = props;
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Section theme={theme} title="Gameplay" subtitle="Basically a Tutorial">
        <>
          In osu! beatmaps, you'll only be playing with the building blocks of
          beatmaps:
          <ul>
            <li>Circle</li>
            <li>Slider</li>
            <li>Spinner</li>
          </ul>
        </>
      </Section>
      <Section theme={theme} subtitle="Circle">
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
            <ImageDemo source={miss} caption="Miss" />
            <ImageDemo source={notYet} caption="50" />
            <ImageDemo source={almost} caption="100" />
            <ImageDemo source={perfect} caption="300" />
          </div>
          <br />
          If a hit granted you anything less than 300 points, then you've either
          hit it too quickly or too slowly.
        </>
      </Section>
    </div>
  );
}

export default Gameplay;
