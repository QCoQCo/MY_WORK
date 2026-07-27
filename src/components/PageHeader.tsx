import SectionTitle from './SectionTitle';
import './PageHeader.css';

interface PageHeaderProps {
    en: string;
    localized: string;
    video: string;
    /** 하단 콘텐츠 컬럼과 타이틀 정렬을 맞추기 위한 최대 폭 */
    maxWidth?: number;
}

/**
 * 서브페이지 상단 영상 배너 + 페이지 타이틀
 */
const PageHeader = ({ en, localized, video, maxWidth = 1200 }: PageHeaderProps) => {
    return (
        <div className='page-header'>
            <video
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
