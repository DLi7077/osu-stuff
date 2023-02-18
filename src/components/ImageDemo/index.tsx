export default function ImageDemo(props: {
  source: any;
  caption: string;
  style?: any;
}): JSX.Element {
  return (
    <div className="align-down-center" style={{ gap: "0.25rem" }}>
      <img
        src={props.source}
        style={{
          maxWidth: "100%",
          objectFit: "none",
          ...props.style,
        }}
        alt={props.caption}
      />
      <div>{props.caption}</div>
    </div>
  );
}
