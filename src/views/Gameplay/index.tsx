import Section from "../../components/Section";
import notYet from "../../assets/images/gameplay/circles/not-yet.png";
import miss from "../../assets/images/gameplay/circles/miss.png";
import almost from "../../assets/images/gameplay/circles/almost.png";
import perfect from "../../assets/images/gameplay/circles/perfect.png";
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
    <>
      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: theme!.subtitle,
        }}
      />

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
            Every circle comes with an approach circle. This approach circle is
            an outer ring indicates when you should click on it. Depending on
            your timing, you will be awarded up to 300 score points.
            <br />
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <ImageDemo source={miss} caption="Miss" />
              <ImageDemo source={notYet} caption="50" />
              <ImageDemo source={almost} caption="100" />
              <ImageDemo source={perfect} caption="300" />
            </div>
          </>
        </Section>
      </div>
    </>
  );
}

export default Gameplay;
