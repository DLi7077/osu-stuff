import TextBlock from "./TextBlock";
import Subtitle from "./Subtitle";
import Title from "./Title";
import "./Section.css";

interface SectionProps {
  theme?: ColorTheme;
  title?: JSX.Element | string;
  subtitle?: JSX.Element | string;
  children?: string | JSX.Element | JSX.Element[];
}

export default function Section(props: SectionProps) {
  const { theme } = props;
  return (
    <div className="section align-down-center">
      <div style={{ backgroundColor: theme!.body, margin: 0 }}>
        {!!props.title && (
          <Title style={{ backgroundColor: theme!.title }}>{props.title}</Title>
        )}
        {!!props.subtitle && (
          <Subtitle style={{ backgroundColor: theme!.subtitle }}>
            {props.subtitle}
          </Subtitle>
        )}
        <TextBlock
          style={{
            backgroundColor: theme!.section,
            borderLeft: `3px solid ${theme!.highlight}`,
          }}
        >
          {props.children}
        </TextBlock>
      </div>
    </div>
  );
}
