import { useRef } from "react";
interface VideoProps {
  source: any;
  caption?: string;
  style?: any;
  volume?: number;
}

export default function Video(props: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      className="align-down-center"
      style={{ gap: "1rem", maxWidth: "100%", width: "fit-content" }}
    >
      <video
        ref={videoRef}
        style={{
          width: "400px",
          maxWidth: "100%",
          height: "auto",
          filter: "drop-shadow(0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2))",
          // transform: "matrix(1, 0, -0.15, 0.90, 0, 0)",
          ...props.style,
        }}
        autoPlay
        controls
        muted
        loop
        playsInline
        onLoadStart={() => {
          videoRef.current!.volume = props.volume ?? 0.1;
        }}
      >
        <source src={props.source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {props.caption}
    </div>
  );
}
