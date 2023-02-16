import "./Section.css";

interface SectionProps {
  theme: ColorTheme;
  title: JSX.Element | string;
  subtitle: JSX.Element | string;
  children: JSX.Element | JSX.Element[];
}
export default function Section(props: SectionProps) {
  const { theme } = props;
  return (
    <div className="section align-down-center">
      <div style={{ backgroundColor: theme.body, margin: 0 }}>
        <div className="title" style={{ backgroundColor: theme.title }}>
          {props.title}
        </div>
        <div className="subtitle" style={{ backgroundColor: theme.subtitle }}>
          {props.subtitle}
        </div>
        <div
          className="content"
          style={{
            backgroundColor: theme.section,
            borderLeft: `2px solid ${theme.highlight}`,
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
