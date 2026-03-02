import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { education, experience } from '../../data';
import SectionTitle from '../../components/SectionTitle';

const TIMELINE_ITEMS = 6;

const AboutSection = () => {
  const { t } = useLanguage();

  const sectionTitle = {
    en: 'HISTORY',
    localized: { ko: '학력 및 과정 이력', ja: '学歴および課程履歴' },
  };

  type TimelineItem = { year: string; ko: string; ja: string };
  const merged: TimelineItem[] = [
    ...education.map((e: TimelineItem) => ({ year: e.year, ko: e.ko, ja: e.ja })),
    ...experience.map((e: TimelineItem) => ({ year: e.year, ko: e.ko, ja: e.ja })),
  ].sort((a, b) => b.year.localeCompare(a.year));

  const displayItems = merged.slice(0, TIMELINE_ITEMS);

  return (
    <section className="about-section" id="about">
      <div className="about-section__inner">
        <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
        <div className="timeline">
          {displayItems.map((item, i) => (
            <div key={`${item.year}-${i}-${item.ko.slice(0, 15)}`} className="timeline__item">
              <strong className="timeline__year">{item.year}</strong>
              <span className="timeline__line" />
              <p className="timeline__text">{t(item)}</p>
            </div>
          ))}
        </div>
        <Link to="/about" className="vm">
          <span>VIEW MORE</span>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
