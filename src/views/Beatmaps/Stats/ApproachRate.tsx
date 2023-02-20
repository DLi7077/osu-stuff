import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function ApproachRate(props: { theme: ColorTheme }) {
  const approachRate5 = require("../../../assets/videos/approach-rates/ar5.mp4");
  const approachRate9 = require("../../../assets/videos/approach-rates/ar9.mp4");
  const iSwearAR9_2 = require("../../../assets/videos/approach-rates/i-swear-ar9_2.mp4");
  const iSwearAR6 = require("../../../assets/videos/approach-rates/i-swear-ar6.mp4");
  return (
    <>
      <Section theme={props.theme} subtitle="Approach Rate (AR)">
        <>
          Approach Rate is the rate at which the outer ring encloses onto the
          hit circle. The higher this value, the faster the approach rate will
          close in.
          <br />
          See if you can tell the difference between these two approach rates.
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Video source={approachRate5} caption="AR : 5" />
            <Video source={approachRate9} caption="AR : 9" />
          </div>
          <div style={{ textAlign: "center" }}>心做し / 花たん</div>
        </>
      </Section>
      <Section theme={props.theme}>
        <>
          You might think that lower AR will make the song easier to read. In
          reality, the speed of the song is still the same. The only thing that
          really changes is how much information you're getting per frame.
          <br />
          For example, take a look at this part of a beatmap:
          <br />
          <br />
          <div className="align-down-center">
            <Video
              source={iSwearAR9_2}
              caption="I swear / sweet ARMS (AR : 9.2)"
              style={{ width: "600px" }}
            />
          </div>
          <br />
          Looks a bit difficult, but you can still follow the notes with your
          eyes, right?
          <br />
          Now look at this same song but with the approach rate set to 6:
          <br />
          <br />
          <div className="align-down-center">
            <Video
              source={iSwearAR6}
              caption="I swear / sweet ARMS (AR : 6)"
              style={{ width: "600px" }}
            />
          </div>
          <br />
        </>
      </Section>
      <Section theme={props.theme}>
        <>
          For easier maps, sure. Lower AR should be fine.
          <br />
          But for faster maps with lots of notes, having a lower AR can cause
          sensory overload. This causes forces you to focus less on your rhythm
          / reflexes, but more on your memory.
          <br />
          <br />
          Instead of thinking -{" "}
          <i>
            "Where's the next note going to spawn? I'm gonna hit it the moment I
            see it."
          </i>
          <br />
          You'll find yourself thinking -{" "}
          <i>"I see so many notes. Which one am I supposed to hit next?"</i>
          <br />
          <br />
          The answer to that is to look for the current smallest approach circle
          on the screen. But you're not a computer that handles linear time
          algorithms in a nanosecond, so it'll be really difficult for you to do
          that while playing.
          <br />
          <br />
          Here's a video of some crackhead playing on a really low AR:
          <br />
          <br />
          <div className="align-down-center">
            <iframe
              width="560"
              height="315"
              frameBorder={0}
              src="https://www.youtube.com/embed/ZIZcCub587A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </>
      </Section>
    </>
  );
}
