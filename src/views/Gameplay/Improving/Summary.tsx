import Section from "../../../components/Section";

export default function Summary(props: { theme: ColorTheme }) {
  return (
    <Section
      theme={props.theme}
      title="Improvement"
      subtitle="In-game Metrics to Consider"
    >
      <>
        If you want to improve at osu! - whether it's to enjoy more beatmaps or
        to clear your favorite song, you should track some metrics that reflect
        your performance.
        <ul>
          <li>Combo Streak</li>
          <li>Accuracy</li>
        </ul>
      </>
    </Section>
  );
}
