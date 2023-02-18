import Section from "../../components/Section";
import slowSpin from "../../assets/images/gameplay/spinners/slow-spin.gif";
import fastSpin from "../../assets/images/gameplay/spinners/fast-spin.gif";
import ImageDemo from "../../components/ImageDemo";

export default function Spinner(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Spinner">
      <>
        Spin as fast as you can to retrieve points. Tip: The closer you spin to
        the center of the spinner, the faster you'll accumulate points
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            rowGap: "2rem",
          }}
        >
          <ImageDemo
            source={slowSpin}
            caption="Average RPM: 250"
            style={{ width: "400px", objectFit: "contain" }}
          />
          <ImageDemo
            source={fastSpin}
            caption=" Average RPM: 315"
            style={{ width: "400px", objectFit: "contain" }}
          />
        </div>
      </>
    </Section>
  );
}
