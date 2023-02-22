import "./Navbar.css";
import osuLogo from "../../assets/images/osu-logo.svg";
import { useScrollYPosition } from "react-use-scroll-position";
import { PAGE_DETAILS } from "../../views";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import { highlightColor } from "../../hooks/useColorTheme";
import githubLogo from "../../assets/images/github-logo.png";

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
  const location = useLocation();

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
        {scrollY <= 40 && (
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
          {PAGE_DETAILS.map((page) => (
            <NavLink
              key={page.path}
              highlight={highlightColor(page.hue)}
              path={page.path}
              label={page.label}
              shouldHighlight={location.pathname === page.path}
            />
          ))}
          <div className="git-repo-route">
            <a
              href="https://github.com/DLi7077/osu-stuff"
              target="_blank"
              rel="noreferrer"
              className="hash-route"
            >
              <img src={githubLogo} className="github-logo" alt="github-logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
