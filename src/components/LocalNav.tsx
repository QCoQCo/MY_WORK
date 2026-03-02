import { Link, useLocation } from 'react-router-dom';
import './LocalNav.css';

const NAV_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/skills', label: 'SKILLS' },
  { path: '/contact', label: 'CONTACT' },
] as const;

const LocalNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="loc_list on">
      <ul>
        {NAV_ITEMS.map(({ path, label }) => {
          const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
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
