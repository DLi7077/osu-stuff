import Section from "../../../components/Section";

export default function Summary(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} title="Beatmaps" subtitle="Some properties">
      <>
        Every beatmap has a few properties that can be tweaked by the author.
        You can quickly look at some stats to have an expectation of your gaming
        experience for each beatmap.
        <ul>
          <li>Beatmap content</li>
          <li>Star Rating</li>
          <li>Approach Rate</li>
          <li>Circle Size</li>
        </ul>
      </>
    </Section>
  );
}
