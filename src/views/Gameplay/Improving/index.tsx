import Combo from "./Combo";
import Accuracy from "./Accuracy";

export default function Improving(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Combo {...props} />
      <Accuracy {...props} />
    </div>
  );
}
