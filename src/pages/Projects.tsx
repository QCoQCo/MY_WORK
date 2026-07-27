import { useLanguage } from '../context';
import { projects } from '../data';
import { PageHeader, ProjectCard } from '../components';
import './Projects.css';

export default function Projects() {
    const { t } = useLanguage();

    const sectionTitle = {
        en: 'PROJECTS',
        localized: {
            ko: '다양한 도전으로 쌓은 프로젝트 경험',
            ja: '多様な挑戦で積んだプロジェクト経験',
            en: 'Project Experience from Diverse Challenges',
        },
    };

    return (
        <div className='page page-projects'>
            <PageHeader
                en={sectionTitle.en}
                localized={t(sectionTitle.localized)}
                video='/videos/header-projects.mp4'
                maxWidth={1200}
            />
            <div className='page-projects__inner'>
                <ul className='project-cards project-cards--full'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
