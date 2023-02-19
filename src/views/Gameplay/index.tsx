import Improving from "./Improving";
import Tutorial from "./Tutorial";
import "../../index.css";

export default function Gameplay(props: { theme?: ColorTheme }) {
  const { theme } = props;
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Tutorial theme={props.theme!} />
      <Improving theme={props.theme!} />
    </div>
  );
}
