import Circle from "./Circle";
import Slider from "./Slider";
import SliderBreak from "./SliderBreak";
import Spinner from "./Spinner";
import Summary from "./Summary";

export default function Tutorial(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <Circle {...props} />
      <Slider {...props} />
      <SliderBreak {...props} />
      <Spinner {...props} />
    </div>
  );
}
