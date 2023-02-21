import "../../index.css";
import Stats from "./Stats";

function Beatmaps(props: { theme?: ColorTheme }) {
  const { theme } = props;

  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Stats theme={theme!} />
    </div>
  );
}

export default Beatmaps;
