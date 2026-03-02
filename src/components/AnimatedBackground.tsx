import './AnimatedBackground.css';

/**
 * LogBookIntro 스타일 우주/별자리 배경 애니메이션
 * - stars: 기본 별 패턴
 * - twinkling: 반짝이는 별 (더 작고 투명)
 * - clouds: 구름/파형 레이어
 */
const AnimatedBackground = () => (
  <div className="animated-bg" aria-hidden>
    <div className="animated-bg__stars" />
    <div className="animated-bg__twinkling" />
    <div className="animated-bg__clouds" />
  </div>
);

export default AnimatedBackground;
