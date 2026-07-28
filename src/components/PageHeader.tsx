import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import './PageHeader.css';

interface PageHeaderProps {
    en: string;
    localized: string;
    video: string;
    /** 하단 콘텐츠 컬럼과 타이틀 정렬을 맞추기 위한 최대 폭 */
    maxWidth?: number;
}

/** 스크롤 대비 영상 이동 비율 */
const PARALLAX_FACTOR = 0.4;

/**
 * 서브페이지 상단 영상 배너 + 페이지 타이틀 (스크롤 패럴랙스)
 */
const PageHeader = ({ en, localized, video, maxWidth = 1200 }: PageHeaderProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const v = videoRef.current;
                if (!v) return;
                /* 배너가 화면 밖으로 나가면 업데이트 불필요 */
                const y = Math.min(window.scrollY, window.innerHeight);
                v.style.transform = `translateY(${y * PARALLAX_FACTOR}px)`;
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className='page-header'>
            <video
                ref={videoRef}
                className='page-header__video'
                src={video}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
            />
            <div className='page-header__inner' style={{ maxWidth: `${maxWidth}px` }}>
                <SectionTitle en={en} localized={localized} />
            </div>
        </div>
    );
};

export default PageHeader;
