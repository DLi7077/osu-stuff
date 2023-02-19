import Tutorial from "./Tutorial";
import Patterns from "./Patterns";
import Improving from "./Improving";
import "../../index.css";

export default function Gameplay(props: { theme?: ColorTheme }) {
  return (
    <div
      className="content-container align-down-center"
      style={{ gap: "4rem" }}
    >
      <Tutorial theme={props.theme!} />
      <Patterns theme={props.theme!} />
      <Improving theme={props.theme!} />
    </div>
  );
}
