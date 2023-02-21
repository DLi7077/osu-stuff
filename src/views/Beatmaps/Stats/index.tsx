import ApproachRate from "./ApproachRate";
import Content from "./Content";
import Summary from "./Summary";
import StarRating from "./StarRating";

export default function Stats(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <Content {...props} />
      <StarRating {...props} />
      <ApproachRate {...props} />
    </div>
  );
}
