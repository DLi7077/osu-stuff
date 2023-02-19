import Section from "../../../components/Section";

export default function Summary(props: { theme: ColorTheme }) {
  return (
    <Section
      theme={props.theme}
      title="Tutorial"
      subtitle="Learn the Basics"
    >
      <>
        In osu! beatmaps, you'll only be playing with the building blocks of
        beatmaps:
        <ul>
          <li>Circle</li>
          <li>Slider</li>
          <li>Spinner</li>
        </ul>
        You can "click" notes with either your mouse buttons or 2 keys on your
        keyboard.
        <br />
        Almost all of the user base uses a keyboard to hit notes.
      </>
    </Section>
  );
}
