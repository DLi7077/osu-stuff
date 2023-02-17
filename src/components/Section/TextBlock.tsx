import "./Section.css";

export default function TextBlock(props: {
  children?: string | JSX.Element | JSX.Element[];
  style: any;
}) {
  return (
    <div className="content" style={props.style}>
      {props.children}
    </div>
  );
}
