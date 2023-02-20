import React from "react";
import ApproachRate from "./ApproachRate";
import Summary from "./Summary";

export default function Stats(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <ApproachRate {...props} />
    </div>
  );
}
