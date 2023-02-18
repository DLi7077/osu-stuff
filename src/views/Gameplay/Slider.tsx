import Section from "../../components/Section";
import sliderDemo from "../../assets/images/gameplay/sliders/sliders.gif";
import ImageDemo from "../../components/ImageDemo";

export default function Slider(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Slider">
      <>
        Sliders behave similarly to circles - instead of just clicking them,
        click and drag to the end of the slider.
        <br />
        If the slider has an arrow at the end, you'll have to drag your cursor
        back to the start.
        <br />
        <br />
        <ImageDemo source={sliderDemo} caption="slider and repeat slider" />
      </>
    </Section>
  );
}
