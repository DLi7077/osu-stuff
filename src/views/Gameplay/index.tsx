import Section from "../../components/Section";
import "../../index.css";
import Circle from "./Circle";
import Combo from "./Combo";
import Slider from "./Slider";
import SliderBreak from "./SliderBreak";
import Spinner from "./Spinner";

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
          You can "click" notes with either your mouse buttons or 2 keys on your
          keyboard.
          <br />
          Almost all of the user base uses a keyboard to hit notes.
        </>
      </Section>
      <Circle theme={theme!} />
      <Slider theme={theme!} />
      <Spinner theme={theme!} />
      <Combo theme={theme!} />
      <SliderBreak theme={theme!} />
    </div>
  );
}

export default Gameplay;
