import Section from "../../components/Section";
import Video from "../../components/Video";
import "../../index.css";

function Info(props: { theme?: ColorTheme }) {
  const { theme } = props;
  const flowerDance = require("../../assets/videos/flower-dance.mp4");
  const tracingDream = require("../../assets/videos/ano-yume-wo-nazotte.mp4");
  const gunjouInfinity = require("../../assets/videos/gunjou-infinity.mp4");

  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: theme!.body }}
    >
      <Section theme={theme} title="osu!" subtitle="In a nutshell">
        <>
          osu! is a popular free-to-play rhythm game made by Dean (peppy)
          Herbert.
          <br />
          <br />
          Clear beatmaps by following the rhythm and clicking the circles.
          <br />
          In addition to being a vibing mechanism, this game also helps you
          develop
          <ul>
            <li>Hand eye coordination</li>
            <li>Rhythm (duh)</li>
            <li>Fast reactions / reflexes</li>
            <li>Humility</li>
            <li>Maybe a taste for J-pop / anime music</li>
            <li>Repetitive strain injury (RSI)</li>
            <li>Carpal Tunnel</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://i.ytimg.com/vi/UmFQuwVaCiU/maxresdefault.jpg"
              style={{ width: "min(600px,100%)" }}
              alt="Now I have RSI and carpal tunnel"
            />
          </div>
          <br />
          <br />
        </>
      </Section>
      <Section theme={theme} subtitle="Beatmaps">
        <>
          Beatmaps are game sessions made by users, that spawn notes for the
          user to click while music is playing in the background. Like many
          rhythm games, the notes are spawned in a way where if clicked
          perfectly, sounds like you're playing the song.
          <br />
          <br />
          Here's what osu! beatmaps look like:
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              columnGap: "4rem",
              rowGap: "2rem",
            }}
          >
            <Video source={flowerDance} caption="Flower Dance / DJ Okawari" />
            <Video source={tracingDream} caption="あの夢をなぞって / YOASOBI" />
            <Video
              source={gunjouInfinity}
              caption="群青インフィニティ / Nao Toyama"
            />
          </div>
          <br />
          <br />
        </>
      </Section>
    </div>
  );
}

export default Info;
