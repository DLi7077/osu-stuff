import Section from "../../components/Section";
import useColorTheme from "../../hooks/useColorTheme";
import "./community.css";
import "../../index.css";

export default function Community() {
  const currTheme = useColorTheme(140);
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
        className="content-container align-down-center"
        style={{ backgroundColor: currTheme.background }}
      >
        <Section theme={currTheme} title="Community" subtitle="How it started">
          <>
            <blockquote>
              Source:{" "}
              <a
                href="https://podcasts.mongodb.com/public/115/The-MongoDB-Podcast-b02cf624/5d3e1b89"
                target="_blank"
                rel="noreferrer"
                style={{ color: currTheme.highlight }}
              >
                MongoDB Podcast: Developing to the beat! With Dean Herbert, osu!
              </a>
            </blockquote>
            <br />
            osu! was made by Dean (peppy) Herbert, an ex Microsoft .NET
            developer. It is open source and have been in development since
            2007.
            <br />
            <br />
            The game was inspired a japanese rhythm game called Osu! Tatakae
            Ouendan on the Nintendo DS. Because the game is created for a mobile
            system, players are limited to the stages of the game for content.
            Dean wanted to be able to add his own songs/musics into the game,
            which he did - now osu!
            <br />
            <br />
            There are currently 8 full-time developers working on the game, as
            well as many community contributions to continuously improve the
            game.
            <br />
            <br />
            Compared to other rhythm games, osu! is community driven with a
            strong focus on user content. Thanks to the beatmap editior he made,
            users are able to create their own beatmaps and share them with
            others, which is the main game content.
            <br />
            <br />
            Although osu! is a non-profit free to play game, their main profit
            comes from donations through "supporter tags".
            <br />
            osu!supporter tags costs 4$ a month and comes with a bunch of
            in-game perks.
            <br />
            <br />
            <blockquote>
              <a
                href="https://osu.ppy.sh/home/support"
                target="_blank"
                rel="noreferrer"
                style={{ color: currTheme.highlight }}
              >
                osu!supporter tag
              </a>
            </blockquote>
            <br />
            <br />
          </>
        </Section>
      </div>
    </>
  );
}
