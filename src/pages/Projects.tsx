import { useLanguage } from '../context';
import { projects } from '../data';
import { SectionTitle, ProjectCard } from '../components';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();

  const sectionTitle = {
    en: 'PROJECTS',
    localized: { ko: '다양한 도전으로 쌓은 프로젝트 경험', ja: '多様な挑戦で積んだプロジェクト経験', en: 'Project Experience from Diverse Challenges' },
  };

  return (
    <div className="page page-projects">
      <div className="page-projects__inner">
        <SectionTitle en={sectionTitle.en} localized={t(sectionTitle.localized)} />
        <ul className="project-cards project-cards--full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} showAchievements />
          ))}
        </ul>
      </div>
    </div>
  );
}
