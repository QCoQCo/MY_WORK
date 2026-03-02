import { FadeInSection } from '../components';
import { HeroSection, IntroSection, ProjectsSection, AboutSection, ContactSection } from './homeSections';
import './Home.css';

export default function Home() {
  return (
    <div className="page page-home">
      <HeroSection />
      <FadeInSection>
        <IntroSection />
      </FadeInSection>
      <FadeInSection>
        <ProjectsSection />
      </FadeInSection>
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <ContactSection />
      </FadeInSection>
    </div>
  );
}
