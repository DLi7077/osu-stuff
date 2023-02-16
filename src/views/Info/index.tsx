import Section from "../../components/Section";
import useColorTheme from "../../hooks/useColorTheme";
import Video from "../../components/Video";
import "../../index.css";

function Info() {
  const flowerDance = require("../../assets/videos/flower-dance.mp4");
  const tracingDream = require("../../assets/videos/ano-yume-wo-nazotte.mp4");
  const gunjouInfinity = require("../../assets/videos/gunjou-infinity.mp4");
  const SEPIA_OFFSET = 35;
  const currTheme = useColorTheme(300 + SEPIA_OFFSET);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: currTheme.subtitle,
        }}
      />
      <div
        className="content-container"
        style={{ backgroundColor: currTheme.background }}
      >
        <Section theme={currTheme} title="osu!" subtitle="In a nutshell">
          <>
            osu! is a popular free-to-play rhythm game made by Dean Herbert (aka
            peppy). This game has a simple rule: "click the circles".
            <br />
            <br />
            The game's main content is to clear beatmaps by clicking circles.
            Beatmaps are maps/ game sessions made by users, that spawn
            notes/circles for the user to click.
            <br />
            Each note comes with an approach circle. The closer the approach
            circle is to the circumference of the note, the more points you get.
            <br />
            <br />
            Points come in batches of 50, 100, 300, where 300 is a perfect hit
            and 50 is a near miss.
            <br />
            You can build up a combo by continously hitting consecutive notes,
            which acts as a score multiplier. If you miss a note, your combo
            resets to 0 and lose some health. If your health bar drops to zero,
            you fail the beatmap. However, you can recover lost hit points when
            you hit notes.
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "4rem",
              }}
            >
              <Video source={flowerDance} caption="Flower Dance / DJ Okawari" />
              <Video
                source={tracingDream}
                caption="あの夢をなぞって / YOASOBI"
              />
              <Video
                source={gunjouInfinity}
                caption="群青インフィニティ / Nao Toyama"
              />
            </div>
          </>
        </Section>
      </div>
    </>
  );
}

export default Info;
