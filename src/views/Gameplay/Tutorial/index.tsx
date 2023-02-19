import Circle from "./Circle";
import Slider from "./Slider";
import SliderBreak from "./SliderBreak";
import Spinner from "./Spinner";
import Summary from "./Summary";

export default function Tutorial(props: { theme: ColorTheme }) {
  return (
    <>
      <Summary {...props} />
      <Circle {...props} />
      <Slider {...props} />
      <SliderBreak {...props} />
      <Spinner {...props} />
    </>
  );
}
