import Section from "../../../components/Section";
import Video from "../../../components/Video";

export default function Combo(props: { theme: ColorTheme }) {
  const sankyouCombo = require("../../../assets/videos/zankyo-sanka-combo.mp4");
  return (
    <Section theme={props.theme} subtitle="Combo">
      <>
        You build combo by hitting consecutive notes without missing. The larger
        this combo gets, the more points you can accumulate.
        <br />
        <br />
        The exact score you get per combo hit is expressed as
        <br />
        <code>
          Score = Hit value * (1 + (Combo multiplier * Difficulty multiplier *
          Mod multiplier / 25))
        </code>
        <blockquote>
          Source :{" "}
          <a
            href="https://osu.ppy.sh/wiki/en/Gameplay/Score/ScoreV1/osu!"
            target="_blank"
            rel="noreferrer"
            style={{ color: props.theme.text_color }}
          >
            osu! Gameplay wiki
          </a>
        </blockquote>
        <br />
        But in layman's terms: The larger your combo streak and the harder the
        beatmap, the more points you will score.
        <br />
        <b>This combo is shown on the bottom left of the screen.</b>
        <br />
        <br />
        If you miss or slider break, your combo resets to 0.
        <br />
        If you happen to hit all notes without missing a single time, you have
        Full Combo'd the beatmap - Congrats! That's a huge achievement!
        <br />
        <br />
        <div className="align-down-center">
          <Video
            source={sankyouCombo}
            caption="Zankyo Sanka / Aimer"
            style={{ width: "600px" }}
          />
        </div>
      </>
    </Section>
  );
}
