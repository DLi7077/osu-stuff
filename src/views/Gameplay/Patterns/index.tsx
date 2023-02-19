import Bursts from "./Bursts";
import Jumps from "./Jumps";
import Streams from "./Streams";
import Summary from "./Summary";

export default function Patterns(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: "100%" }}>
      <Summary {...props} />
      <Bursts {...props} />
      <Streams {...props} />
      <Jumps {...props} />
    </div>
  );
}
