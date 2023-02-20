import Section from "../../../components/Section";

export default function Summary(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} title="Beatmaps" subtitle="Some properties">
      <>
        Every beatmap has a few properties that can be tweaked by the author to
        customize your osu! experience.
        <ul>
          <li>BPM and Objects</li>
          <li>Star Rating</li>
          <li>Approach Rate</li>
          <li>Circle Size</li>
        </ul>
      </>
    </Section>
  );
}
