import { useLanguage } from '../context';
import { profile, education, certifications } from '../data';
import { SectionTitle, PageHeader } from '../components';
import './About.css';

type TimelineItem = { year: string; ko: string; ja: string };

export default function About() {
    const { t } = useLanguage();

    const sectionTitle = {
        en: 'ABOUT',
        localized: { ko: '소개', ja: 'プロフィール', en: 'About' },
    };

    // const selfIntroTitle = {
    //   en: 'SELF INTRODUCTION',
    //   localized: { ko: '자기소개 및 지원동기', ja: '自己紹介・志望動機', en: 'Self Introduction' },
    // };

    const historyTitle = {
        en: 'HISTORY',
        localized: { ko: '학력 및 과정 이력', ja: '学歴および課程履歴', en: 'Education & History' },
    };

    const certTitle = {
        en: 'CERTIFICATIONS',
        localized: { ko: '자격·면허', ja: '資格・免許', en: 'Certifications' },
    };

    const sortedEducation: TimelineItem[] = [...education].sort((a, b) =>
        a.year.localeCompare(b.year),
    );

    return (
        <div className='page page-about'>
            <PageHeader
                en={sectionTitle.en}
                localized={t(sectionTitle.localized)}
                video='/videos/header-about.mp4'
                maxWidth={700}
            />
            <div className='page-about__inner'>
                <div className='profile-card'>
                    <dl className='profile-dl'>
                        <div className='profile-dl__row'>
                            <dt>{t({ ko: '이름', ja: '名前' })}</dt>
                            <dd>{t(profile.name)}</dd>
                        </div>
                    </dl>
                    <ul className='profile-links'>
                        <li>
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        </li>
                        <li>
                            <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <SectionTitle en={selfIntroTitle.en} localized={t(selfIntroTitle.localized)} />
                <div className='self-intro'>
                    {selfIntroSections.map((section) => (
                        <article key={section.title.ko} className='self-intro__card'>
                            <h3 className='self-intro__title'>
                                <span className='self-intro__icon'>{section.icon}</span>
                                {t(section.title)}
                            </h3>
                            <p className='self-intro__body'>{t(section.body)}</p>
                        </article>
                    ))}
                </div> */}

                <SectionTitle en={historyTitle.en} localized={t(historyTitle.localized)} />
                <div className='about-timeline'>
                    {sortedEducation.map((item, i) => (
                        <div key={`${item.year}-${i}`} className='about-timeline__item'>
                            <strong className='about-timeline__year'>{item.year}</strong>
                            <p className='about-timeline__text'>{t(item)}</p>
                        </div>
                    ))}
                </div>

                <SectionTitle en={certTitle.en} localized={t(certTitle.localized)} />
                <ul className='about-certs'>
                    {certifications.map((cert, i) => (
                        <li key={i} className='about-certs__item'>
                            <span className='about-certs__year'>{cert.year}</span>
                            <span className='about-certs__text'>{t(cert)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
