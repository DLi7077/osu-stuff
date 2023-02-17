import "./Section.css";

export default function Subtitle(props: {
  children?: string | JSX.Element | JSX.Element[];
  style: any;
}) {
  return (
    <div className="subtitle" style={props.style}>
      {props.children}
    </div>
  );
}
