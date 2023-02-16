import Navbar from "./components/Navbar";
import Section from "./components/Section";
import useColorTheme from "./hooks/useColorTheme";
import "./index.css";

function App() {
  const SEPIA_OFFSET = 35;
  const currTheme = useColorTheme(300 + SEPIA_OFFSET);
  return (
    <>
      <Navbar />
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
            you fail the beatmap. You do get somes hit points when you hit notes
            based on the points you retrieve.
            <br/>
            <br/>
          </>
        </Section>
      </div>
    </>
  );
}

export default App;
