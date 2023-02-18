import Section from "../../components/Section";
import Video from "../../components/Video";

export default function SliderBreak(props: { theme: ColorTheme }) {
  const roadJebait = require("../../assets/videos/road-of-jebait.mp4");
  return (
    <Section theme={props.theme} subtitle="Slider Break">
      <>
        Note: The ring that pops up during the slider drag is the range of where
        your cursor should be. If your cursor leaves this area, then you'll
        perform what's called a "slider break", where you miss part of the
        slider. You'll still get some points, but not 300.
        <br />
        <br />
        To avoid slider breaking, stay in pace with the slider! Though, some
        beatmaps can troll you. As you play the game more, you'll recognize
        patterns and listen well enough to gauge how fast a slider will be.
        However, there will be times where you expect a slider to be fast but it
        happens to be slow.
        <br />
        <br />
        <Video
          source={roadJebait}
          caption="Road of Resistance / BABYMETAL"
          style={{ width: "600px" }}
        />
      </>
    </Section>
  );
}
