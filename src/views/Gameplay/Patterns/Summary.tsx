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
        <br />
        Getting good at hitting these patterns and transitioning from one to
        another can really allow you enjoy beatmaps more.
        <br />
        <br />
        For each video example, you can see how many times the keys have been
        pressed on the right edge.
      </>
    </Section>
  );
}
