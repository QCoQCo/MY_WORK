interface SectionTitleProps {
  en: string;
  localized: string;
}

/**
 * lordin 패턴: <span>영문</span> + <strong>한글</strong>
 */
const SectionTitle = ({ en, localized }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <span className="section-title__en">{en}</span>
      <strong className="section-title__localized">{localized}</strong>
    </div>
  );
};

export default SectionTitle;
