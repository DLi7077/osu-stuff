import "./Section.css";

export default function Title(props: {
  children?: string | JSX.Element | JSX.Element[];
  style?: any;
}) {
  return (
    <div
      className="title"
      style={{ borderBottom: "1px solid white", ...props.style }}
    >
      {props.children}
    </div>
  );
}
