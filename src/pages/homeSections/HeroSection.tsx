import { useLanguage } from '../../context';
import { profile, jobSummary } from '../../data';

const HeroSection = () => {
    const { t } = useLanguage();

    const greeting = { ko: '안녕하세요, 저는', ja: '初めまして、私は' };
    const closing = { ko: '입니다.', ja: 'です。' };
    const tagline = {
        ko: '풀스택 개발자 · React · Rust · AWS',
        ja: 'フルスタック開発者 · React · Rust · AWS',
    };

    return (
        <section className='hero' id='hero'>
            <div className='hero__bg' />
            <div className='hero__content'>
                <p className='hero__greeting'>{t(greeting)}</p>
                <h1 className='hero__name'>{t(profile.name)}</h1>
                <p className='hero__closing'>{t(closing)}</p>
                <p className='hero__tagline'>{t(tagline)}</p>
                <p className='hero__summary'>{t(jobSummary)}</p>
            </div>
            <div className='hero__scroll'>
                <span>SCROLL DOWN</span>
            </div>
        </section>
    );
};

export default HeroSection;
