import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context';
import { profile, jobSummary } from '../../data';

const VIDEO_SOURCES = [
    '/videos/main_video 2.mp4',
    '/videos/contact_video.mp4',
    '/videos/rainbow.mp4',
    '/videos/main_video.mp4',
];

const HeroSection = () => {
    const { t } = useLanguage();
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleEnded = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % VIDEO_SOURCES.length);
    }, []);

    useEffect(() => {
        videoRefs.current[activeIndex]?.play().catch(() => {});
    }, [activeIndex]);

    const greeting = { ko: '안녕하세요, 저는', ja: '初めまして、私は' };
    const closing = { ko: '입니다.', ja: 'です。' };
    const tagline = {
        ko: '풀스택 개발자 · React · Rust · AWS',
        ja: 'フルスタック開発者 · React · Rust · AWS',
    };

    return (
        <section className='hero' id='hero'>
            <div className='hero__bg' />
            <div className='hero__video-wrap' aria-hidden>
                {VIDEO_SOURCES.map((src, i) => (
                    <video
                        key={src}
                        ref={(el) => {
                            videoRefs.current[i] = el;
                        }}
                        src={src}
                        muted
                        playsInline
                        loop={false}
                        onEnded={handleEnded}
                        className={`hero__video ${i === activeIndex ? 'hero__video--active' : ''}`}
                    />
                ))}
            </div>
            <div className='hero__content'>
                <p className='hero__greeting'>{t(greeting)}</p>
                <h1 className='hero__name'>{t(profile.name)}</h1>
                <p className='hero__closing'>{t(closing)}</p>
                <p className='hero__tagline'>{t(tagline)}</p>
                <p className='hero__summary'>{t(jobSummary)}</p>
            </div>
            <a href='#intro' className='hero__scroll' aria-label='다음 섹션으로'>
                <span>SCROLL DOWN</span>
            </a>
        </section>
    );
};

export default HeroSection;
