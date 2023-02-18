import Section from "../../components/Section";
import ImageDemo from "./ImageDemo";
import sliderDemo from "../../assets/images/gameplay/sliders/sliders.gif";

export default function Slider(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Slider">
      <>
        <ImageDemo source={sliderDemo} caption="slider and repeat slider" />
      </>
    </Section>
  );
}
