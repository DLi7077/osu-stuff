import clearScreen from "../../../assets/images/gameplay/accuracy/clear-screen.png";
import hitMeter from "../../../assets/images/gameplay/accuracy/hit-meter.png";
import topRight from "../../../assets/images/gameplay/accuracy/top-right.png";
import ImageDemo from "../../../components/ImageDemo";
import Section from "../../../components/Section";

export default function Accuracy(props: { theme: ColorTheme }) {
  return (
    <Section theme={props.theme} subtitle="Accuracy">
      <>
        If you want to improve at osu!, you'll have to actively keep mind of
        your accuracy. Your accuracy describes how well you can hit the notes,
        reflected by the points you acquire per hit.
        <br />
        <ul>
          <li>300 : 100%</li>
          <li>100 : 33.33% (1/3)</li>
          <li>50 : 16.67% (1/6)</li>
          <li>Miss : 0%</li>
        </ul>
        You generally want to aim for 90+% accuracy, and keep it at that as you
        try out harder maps.
        <br />
        <br />
        Accuracy can be tracked in two ways: the percentage on the top right,
        and the Hit error score meter at the bottom.
        <br />
        <br />
        <ImageDemo
          source={hitMeter}
          caption="[Hit meter] : left = too early, middle = perfect timing, right = too late"
        />
        <br />
        <ImageDemo
          source={topRight}
          caption="Large digits = score, Pie = song progress, Percentage = hit accuracy"
        />
        <br />
        When you complete a beatmap, the game will assign you a ranking of your
        performance as well as a summary of your gameplay. The ranking is
        assigned based on your accuracy and if you missed any notes.
        <br />
        <br />
        <ImageDemo
          source={clearScreen}
          caption="End screen after clearing a beatmap."
          style={{ objectFit: "contain" }}
        />
        <br />
        How the game decides your ranking:
        <table>
            <tr>
              <th>Grade</th>
              <th style={{ textAlign: "left" }}>Condition</th>
            </tr>
          <tbody>
            <tr>
              <td>SS</td>
              <td>100% accuracy</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Over 80% 300s and no misses OR over 90% 300s</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Over 70% 300s and no misses OR over 80% 300s</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Over 60% 300s</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Over 60% 300s</td>
            </tr>
          </tbody>
        </table>
        <br />
        <blockquote>
          Source :{" "}
          <a
            href="https://osu.ppy.sh/wiki/en/Gameplay/Grade"
            target="_blank"
            rel="noreferrer"
            style={{ color: props.theme.text_color }}
          >
            osu! Gameplay wiki
          </a>
        </blockquote>
      </>
    </Section>
  );
}
