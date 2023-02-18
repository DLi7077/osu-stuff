import Section from "../../components/Section";
import ImageDemo from "./ImageDemo";
import sliderDemo from "../../assets/images/gameplay/sliders/sliders.gif";
import Video from "../../components/Video";

export default function Slider(props: { theme: ColorTheme }) {
  const roadJebait = require("../../assets/videos/road-of-jebait.mp4");

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
        Note: The ring that pops up during the slider drag is the range of where
        your cursor should be. If your cursor leaves this area, then you'll
        perform what's called a "slider break", where you miss part of the
        slider. You'll still get some points, but not 300.
        <br />
        <br />
        <ImageDemo source={sliderDemo} caption="slider and repeat slider" />
        <br />
        To avoid slider breaking, stay in pace with the slider! Though, some
        beatmaps can troll you. As you play the game more, you'll recognize
        patterns and listen well enough to gauge how fast a slider will be.
        However, there will be times where you expect a slider to be fast but it
        happens to be slow.
        <br />
        For example:
        <Video
          source={roadJebait}
          caption="Road of Resistance / BABYMETAL"
          style={{ width: "100%" }}
        />
      </>
    </Section>
  );
}
