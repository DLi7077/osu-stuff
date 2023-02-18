import Section from "../../components/Section";
import "../../index.css";

function Beatmaps(props: { theme?: ColorTheme }) {
  const { theme } = props;

  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Section theme={theme} title="Beatmaps" subtitle="Community Standards">
        <>
          Today, beatmaps are made by the fanbase and are ranked by popularity
          and how well it's mapped. The community has a standard for how maps
          should be:
          <ul>
            <li>Beatmap notes synced with music</li>
            <li>Whether beating it is actually possible</li>
            <li>Beatmapper Reputation</li>
          </ul>
          Popular Beatmappers like Sotarks, Monstrata, and VINXIS are well known
          for making enjoyable beatmaps. There's high expectations for their
          beatmaps to be well made and have challenging / fun note patterns.
        </>
      </Section>
      <Section theme={theme} subtitle="Graveyard">
        <>
          Eventually, creators stop updating their beatmaps, and they'll be
          labeled as "Graveyard".
          <br />
          Graveyard maps do not normally show up on the website's search results
          and is a sign that a map has lost popularity due to lack of user
          activity. However, that doesn't mean that they're bad maps! One of my
          favorite maps is labeled as Graveyard, but I still struggle to clear
          it to this day.
          <blockquote style={{ fontSize: "0.8rem" }}>
            <i>
              The graveyard is a place where beatmaps abandoned by their hosts
              reside. These beatmaps do not have leaderboards, but they can
              still be downloaded and played, and they continue to contribute to
              play statistics. - osu!
            </i>
          </blockquote>
        </>
      </Section>
    </div>
  );
}

export default Beatmaps;
