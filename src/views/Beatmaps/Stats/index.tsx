import ApproachRate from "./ApproachRate";
import BpmObjects from "./BpmObjects";
import Summary from "./Summary";

export default function Stats(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <BpmObjects {...props} />
      <ApproachRate {...props} />
    </div>
  );
}
