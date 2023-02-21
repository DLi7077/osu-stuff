import Section from "../../../components/Section";

export default function StarRating(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Star Rating">
      <>
        The star rating, reflects the overall difficulty of the beatmap.
        <br />
        <br />
        For reference:
        <br />
        - The tutorial beatmap is 1 star
        <br />
        - A lot of popular beatmaps are 4-6 stars
        <br />
        - Difficult beatmaps are usually 6 stars or higher.
        <br />
        <br />
        The game starts to get fun when you can do 4-5 star maps, since the
        beatmap BPM tends to match the song very well.
      </>
    </Section>
  );
}
