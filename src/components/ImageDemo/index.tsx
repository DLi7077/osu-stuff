export default function ImageDemo(props: {
  source: any;
  caption?: string;
  style?: any;
}): JSX.Element {
  return (
    <div
      className="align-down-center"
      style={{ gap: "0.25rem", maxWidth: "100%", width: "fit-content" }}
    >
      <img
        src={props.source}
        style={{
          maxWidth: "100%",
          objectFit: "none",
          ...props.style,
        }}
        alt={props.caption}
      />
      {!!props.caption && <div>{props.caption}</div>}
    </div>
  );
}
