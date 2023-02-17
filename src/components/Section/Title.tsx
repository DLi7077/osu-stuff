import "./Section.css";

export default function Title(props: {
  children?: string | JSX.Element | JSX.Element[];
  style?: any;
}) {
  return (
    <div className="title" style={props.style}>
      {props.children}
    </div>
  );
}
