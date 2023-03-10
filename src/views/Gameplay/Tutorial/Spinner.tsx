import Section from "../../../components/Section";
import slowSpin from "../../../assets/images/gameplay/spinners/slow-spin.gif";
import fastSpin from "../../../assets/images/gameplay/spinners/fast-spin.gif";
import ImageDemo from "../../../components/ImageDemo";

export default function Spinner(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Spinner">
      <>
        Spin as fast as you can to clear it. Any extra spins after clearing it
        will grant extra points.
        <br />
        Tip: Keeping your cursor closer to the center of the spinner will allow
        you to spin faster, which will grant more points.
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
