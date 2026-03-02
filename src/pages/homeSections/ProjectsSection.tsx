import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { projects } from '../../data';
import { SectionTitle, ProjectCard } from '../../components';

const PREVIEW_COUNT = 6;

const ProjectsSection = () => {
  const { t } = useLanguage();

  const sectionTitle = {
    en: 'PROJECTS',
    localized: { ko: '다양한 도전으로 쌓은 프로젝트 경험', ja: '多様な挑戦で積んだプロジェクト経験' },
  };

  const previewProjects = projects.slice(0, PREVIEW_COUNT);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__inner">
        <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
        <ul className="project-cards">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
        <Link to="/projects" className="projects-section__more vm">
          <span>{t({ ko: '전체 프로젝트 보기', ja: '全プロジェクトを見る' })}</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
