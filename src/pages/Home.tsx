import { HeroSection, IntroSection, ProjectsSection, AboutSection, ContactSection } from './homeSections';
import './Home.css';

export default function Home() {
  return (
    <div className="page page-home">
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
