import "../../index.css";

import Tutorial from "./Tutorial";

export default function Gameplay(props: { theme?: ColorTheme }) {
  const { theme } = props;
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Tutorial theme={props.theme!} />
    </div>
  );
}
