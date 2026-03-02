import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LocalNav.css';

const PAGE_NAV = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/skills', label: 'SKILLS' },
  { path: '/contact', label: 'CONTACT' },
] as const;

const SECTION_NAV = [
  { id: 'hero', label: 'HERO' },
  { id: 'intro', label: 'INTRO' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
] as const;

const LocalNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_NAV.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  if (isHome) {
    return (
      <div className="loc_list">
        <ul>
          {SECTION_NAV.map(({ id, label }) => (
            <li key={id} className={activeSection === id ? 'on' : ''}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="loc_list">
      <ul>
        {PAGE_NAV.map(({ path, label }) => {
          const isActive = path === '/' ? false : pathname.startsWith(path);
          return (
            <li key={path} className={isActive ? 'on' : ''}>
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocalNav;
