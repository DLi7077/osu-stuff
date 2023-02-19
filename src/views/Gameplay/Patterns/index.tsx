import Summary from "./Summary";

export default function Patterns(props: { theme: ColorTheme }) {
  return (
    <div style={{ backgroundColor: props.theme.body, width: '100%' }}>
      <Summary {...props} />

    </div>
  );
}
