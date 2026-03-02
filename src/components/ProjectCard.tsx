import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper.css';
import { useLanguage } from '../context';
import type { Project } from '../data';
import './ProjectCard.css';

const DEFAULT_SCREENSHOT = '/images/default.jpg';

interface ProjectCardProps {
  project: Project;
  showAchievements?: boolean;
}

const ProjectCard = ({ project, showAchievements = false }: ProjectCardProps) => {
  const { t } = useLanguage();
  const screenshots = project.screenshot ?? DEFAULT_SCREENSHOT;
  const images = Array.isArray(screenshots)
    ? (screenshots.length > 0 ? screenshots : [DEFAULT_SCREENSHOT])
    : [screenshots];

  return (
    <li className="project-card">
      <div className="project-card__thumb">
        {images.length > 1 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            className="project-card__swiper"
          >
            {images.map((src) => (
              <SwiperSlide key={src}>
                <img src={src} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={images[0]} alt="" />
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__head">
          <h3 className="project-card__name">{t(project.name)}</h3>
          <span className="project-card__period">{project.period}</span>
        </div>
        <p className="project-card__overview">{t(project.overview)}</p>
        <div className="project-card__tech">
          {project.tech.slice(0, 6).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        {showAchievements && project.achievements && project.achievements.length > 0 && (
          <ul className="project-card__achievements">
            {project.achievements.map((a, i) => (
              <li key={i}>{t(a)}</li>
            ))}
          </ul>
        )}
        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
            <span>GitHub</span>
          </a>
          {project.deployUrl && (
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="btn-deploy">
              <span>Deploy</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
