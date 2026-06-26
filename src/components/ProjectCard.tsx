import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context';
import type { Project } from '../data';
import './ProjectCard.css';

const DEFAULT_SCREENSHOT = '/images/default.jpg';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const screenshots = project.screenshot ?? DEFAULT_SCREENSHOT;
    const images = Array.isArray(screenshots)
        ? screenshots.length > 0
            ? screenshots
            : [DEFAULT_SCREENSHOT]
        : [screenshots];

    const handleCardClick = () => {
        navigate(`/projects/${project.id}`);
    };

    return (
        <li
            className='project-card project-card--clickable'
            onClick={handleCardClick}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
            aria-label={`${t(project.name)} 상세 보기`}
        >
            <div className='project-card__thumb'>
                {images.length > 1 ? (
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        className='project-card__swiper'
                    >
                        {images.map((src) => (
                            <SwiperSlide key={src}>
                                <img src={src} alt='' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <img src={images[0]} alt='' />
                )}
            </div>
            <div className='project-card__body'>
                <div className='project-card__head'>
                    <h3 className='project-card__name'>{t(project.name)}</h3>
                    <span className='project-card__period'>{project.period}</span>
                </div>
                <p className='project-card__overview'>{t(project.overview)}</p>
                <div className='project-card__tech'>
                    {project.tech.slice(0, 6).map((tech) => (
                        <span key={tech} className='tech-tag'>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default ProjectCard;
