import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { profile } from '../../data';
import SectionTitle from '../../components/SectionTitle';

const ContactSection = () => {
  const { t } = useLanguage();

  const sectionTitle = {
    en: 'CONTACT',
    localized: { ko: '함께 일하고 싶으시다면', ja: '共に働きたい方は', en: 'If you\'d like to work together' },
  };

  const cta = {
    ko: '연락 주세요',
    ja: 'お問い合わせください',
    en: 'Please get in touch',
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
        <p className="contact-section__cta">{t(cta)}</p>
        <ul className="contact-section__links">
          <li>
            <span className="label">E.</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className="label">G.</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <Link to="/contact" className="vm">
          <span>VIEW MORE</span>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
