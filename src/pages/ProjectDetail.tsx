import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper.css';
import { useLanguage } from '../context';
import { projects } from '../data';
import './ProjectDetail.css';

const DEFAULT_SCREENSHOT = '/images/default.jpg';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const screenshots = project.screenshot ?? DEFAULT_SCREENSHOT;
  const images = Array.isArray(screenshots)
    ? (screenshots.length > 0 ? screenshots : [DEFAULT_SCREENSHOT])
    : [screenshots];

  return (
    <div className="page page-project-detail">
      <div className="page-project-detail__inner">

        {/* 뒤로가기 */}
        <button
          className="project-detail__back"
          onClick={() => navigate('/projects')}
          aria-label="프로젝트 목록으로 돌아가기"
        >
          <span className="project-detail__back-arrow">←</span>
          <span>Projects</span>
        </button>

        {/* 헤더 */}
        <header className="project-detail__header">
          <h1 className="project-detail__name">{t(project.name)}</h1>
          <div className="project-detail__meta">
            <span className="project-detail__period">{project.period}</span>
            {project.team && (
              <span className="project-detail__team">{t(project.team)}</span>
            )}
          </div>
        </header>

        {/* 이미지 슬라이더 */}
        <div className="project-detail__gallery">
          {images.length > 1 ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="project-detail__swiper"
            >
              {images.map((src) => (
                <SwiperSlide key={src}>
                  <img src={src} alt={t(project.name)} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img className="project-detail__single-img" src={images[0]} alt={t(project.name)} />
          )}
        </div>

        {/* 본문 */}
        <div className="project-detail__content">

          {/* 개요 */}
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Overview</h2>
            <p className="project-detail__overview">{t(project.overview)}</p>
          </section>

          {/* 기술 스택 */}
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Tech Stack</h2>
            <div className="project-detail__tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {/* 성과·특징 */}
          {project.achievements && project.achievements.length > 0 && (
            <section className="project-detail__section">
              <h2 className="project-detail__section-title">Achievements</h2>
              <ul className="project-detail__achievements">
                {project.achievements.map((a, i) => (
                  <li key={i}>{t(a)}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 링크 */}
          <section className="project-detail__section project-detail__section--links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <span>GitHub</span>
            </a>
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-deploy"
              >
                <span>Deploy</span>
              </a>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
