import Combo from "./Combo";
import Accuracy from "./Accuracy";
import Summary from "./Summary";

export default function Improving(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <Combo {...props} />
      <Accuracy {...props} />
    </div>
  );
}
