import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context';
import { profile, jobSummary } from '../../data';

const VIDEO_SOURCES = [
    '/videos/main_video 2.mp4',
    '/videos/contact_video.mp4',
    '/videos/rainbow.mp4',
    '/videos/main_video.mp4',
];

/** 영상 끝나기 전 크로스페이드를 시작할 시점(초) */
const CROSSFADE_LEAD = 1;

const HeroSection = () => {
    const { t } = useLanguage();
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [typedName, setTypedName] = useState('');

    const advance = useCallback((from: number) => {
        setActiveIndex((prev) => (prev === from ? (prev + 1) % VIDEO_SOURCES.length : prev));
    }, []);

    /* 끝나기 CROSSFADE_LEAD초 전에 다음 영상으로 전환 → 재생 중 크로스페이드 */
    const handleTimeUpdate = useCallback(
        (i: number) => (e: React.SyntheticEvent<HTMLVideoElement>) => {
            const v = e.currentTarget;
            if (v.duration && v.duration - v.currentTime < CROSSFADE_LEAD) advance(i);
        },
        [advance],
    );

    useEffect(() => {
        const v = videoRefs.current[activeIndex];
        if (!v) return;
        /* 이전 사이클에서 끝까지 재생된 영상은 처음으로 되감기 */
        if (v.duration && v.duration - v.currentTime < CROSSFADE_LEAD + 0.5) v.currentTime = 0;
        v.play().catch(() => {});
    }, [activeIndex]);

    /* 이름 타이핑 애니메이션 */
    const fullName = t(profile.name);
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const id = setTimeout(() => setTypedName(fullName));
            return () => clearTimeout(id);
        }
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            setTypedName(fullName.slice(0, i));
            if (i >= fullName.length) clearInterval(id);
        }, 110);
        return () => clearInterval(id);
    }, [fullName]);

    const greeting = { ko: '안녕하세요, 저는', ja: '初めまして、私は', en: 'Hello, I am' };
    const closing = { ko: '입니다.', ja: 'です。', en: '.' };
    const tagline = {
        ko: '풀스택 개발자 · React · Rust · AWS',
        ja: 'フルスタック開発者 · React · Rust · AWS',
        en: 'Full-stack Developer · React · Rust · AWS',
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
                        onTimeUpdate={handleTimeUpdate(i)}
                        onEnded={() => advance(i)}
                        className={`hero__video ${i === activeIndex ? 'hero__video--active' : ''}`}
                    />
                ))}
            </div>
            <div className='hero__content'>
                <p className='hero__greeting'>{t(greeting)}</p>
                <h1 className='hero__name'>
                    {typedName}
                    <span className='hero__cursor' aria-hidden />
                </h1>
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
