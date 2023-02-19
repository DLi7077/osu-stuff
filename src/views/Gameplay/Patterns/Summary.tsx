import Section from "../../../components/Section";

export default function Summary(props: { theme: ColorTheme }) {
  return (
    <Section
      theme={props.theme}
      title="Patterns"
      subtitle="Common patterns across beatmaps"
    >
      <>
        As you play more beatmaps, you might notice a few patterns that show up
        very often.
        <ul>
          <li>Bursts</li>
          <li>Streams</li>
          <li>Jumps</li>
        </ul>
        Getting good at hitting these patterns and learning to transition from
        one to another really helps to enjoy beatmaps more.
        <br />
        <br />
        For each video example, you can see how many times the keys have been
        pressed on the right edge.
      </>
    </Section>
  );
}
