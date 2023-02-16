import "./Navbar.css";
import osuLogo from "../../assets/images/osu-logo.svg";

const Effects = {
  tint: (hue: number) => ({
    filter: `sepia(100%) saturate(360%) brightness(100%) hue-rotate(${hue}deg)`,
  }),
};

export default function Navbar(): JSX.Element {
  const LOGO_SIZE_PX = 64;
  return (
    <nav>
      <div className="nav-background" style={Effects.tint(300)} />
      <div className="navbar-content">
        <img
          src={osuLogo}
          style={{ width: `${LOGO_SIZE_PX}px`, height: `${LOGO_SIZE_PX}px` }}
          alt="osu logo white"
        />
        <li>Info</li>
        <li>Gameplay</li>
        <li>Origin</li>
        <div className="git-repo-route">Github</div>
      </div>
    </nav>
  );
}
