import { useState } from 'react';
import { useLanguage } from '../context';
import { skills } from '../data';
import { SectionTitle } from '../components';
import './Skills.css';

export default function Skills() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const sectionTitle = {
        en: 'SKILLS',
        localized: { ko: '기술 스택', ja: '技術スタック', en: 'Tech Stack' },
    };

    const activeCategory = skills[activeIndex];

    return (
        <div className='page page-skills'>
            <div className='page-skills__inner'>
                <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
                <div className='skills-layout'>
                    <div className='skills-tabs'>
                        {skills.map((cat, i) => (
                            <button
                                key={i}
                                type='button'
                                className={`skills-tab ${i === activeIndex ? 'skills-tab--active' : ''}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                {t(cat.category)}
                            </button>
                        ))}
                    </div>
                    <div className='skills-content'>
                        <h3 className='skills-content__title'>
                            {t({ ko: 'Skill Stack', ja: 'Skill Stack', en: 'Skill Stack' })} @{' '}
                            {t(activeCategory.category)}
                        </h3>
                        <ul className='skills-list'>
                            {activeCategory.items.map((item) => (
                                <li key={item.name} className='skills-list__item'>
                                    <h4 className='skills-list__name'>{item.name}</h4>
                                    <div className='skills-list__desc'>
                                        {item.iconUrl && (
                                            <img
                                                src={item.iconUrl}
                                                alt=''
                                                className='skills-list__icon'
                                            />
                                        )}
                                        <span>• {t(item.description)}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
