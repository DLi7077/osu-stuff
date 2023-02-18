import "./Navbar.css";
import osuLogo from "../../assets/images/osu-logo.svg";
import { Link } from "react-router-dom";
import { useScrollYPosition } from "react-use-scroll-position";
import { useEffect } from "react";

const Effects = {
  tint: (hue: number) => ({
    filter: `hue-rotate(${hue}deg) saturate(.6)`,
  }),
};

export default function Navbar(props: {
  hue: number;
  theme: ColorTheme;
}): JSX.Element {
  const scrollY = useScrollYPosition();
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return (
    <nav
      style={{
        ...(scrollY > 40
          ? {
              backgroundColor: props.theme.navbar,
              height: "var(--navbar-height-condensed)",
            }
          : {}),
      }}
    >
      <div className="nav-wrapper">
        {scrollY < 40 && (
          <div className="nav-background" style={Effects.tint(props.hue)} />
        )}
        <div className="navbar-content">
          <img
            src={osuLogo}
            className="osu-logo"
            style={{
              ...(scrollY > 40
                ? {
                    height: "var(--osu-logo-size-condensed)",
                    width: "var(--osu-logo-size-condensed)",
                  }
                : {}),
            }}
            alt="osu logo white"
          />
          <li>
            <Link to="/info" className="hash-route">
              Info
            </Link>
          </li>
          <li>
            <Link to="/gameplay" className="hash-route">
              Gameplay
            </Link>
          </li>
          <li>
            <Link to="/beatmaps" className="hash-route">
              Beatmaps
            </Link>
          </li>
          <li>
            <Link to="/community" className="hash-route">
              Community
            </Link>
          </li>
          <div className="git-repo-route">
            <a
              href="https://github.dev/DLi7077/osu-stuff"
              target="_blank"
              rel="noreferrer"
              className="hash-route"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
