import { useLanguage } from '../../context';
import { introSummary, introStrength } from '../../data';
import SectionTitle from '../../components/SectionTitle';

const IntroSection = () => {
  const { t } = useLanguage();

  const sectionTitle = {
    en: 'ABOUT',
    localized: { ko: '자율적인 문제 해결과 끊임없는 학습', ja: '自律的な問題解決と貪欲な学習', en: 'Autonomous Problem Solving & Continuous Learning' },
  };

  return (
    <section className="intro" id="intro">
      <div className="intro__inner">
        <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
        <div className="intro__text">
          <p>{t(introSummary)}</p>
          <p className="intro__strength">{t(introStrength)}</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
