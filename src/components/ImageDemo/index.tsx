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
          aspectRatio: "1/1",
          objectFit: "none",
          borderRadius: "40px",
          ...props.style,
        }}
        alt={props.caption}
      />
      <div>{props.caption}</div>
    </div>
  );
}
