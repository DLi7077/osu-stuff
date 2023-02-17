import "./Navbar.css";
import osuLogo from "../../assets/images/osu-logo.svg";
import { Link } from "react-router-dom";

const Effects = {
  tint: (hue: number) => ({
    filter: `hue-rotate(${hue}deg) saturate(.6)`,
  }),
};

export default function Navbar(): JSX.Element {
  const LOGO_SIZE_PX = 64;

  return (
    <nav>
      <div className="nav-background" style={Effects.tint(335)} />
      <div className="navbar-content">
        <img
          src={osuLogo}
          style={{ width: `${LOGO_SIZE_PX}px`, height: `${LOGO_SIZE_PX}px` }}
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
          <Link to="/origin" className="hash-route">
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
    </nav>
  );
}
