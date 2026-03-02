import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context';
import './Header.css';

const SCROLL_THRESHOLD = 50;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { locale, setLocale } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id='header' className={scrolled ? 'on' : ''}>
            <div className='hd_inner'>
                <h1 className='logo'>
                    <Link to='/'>CO_s_MOS</Link>
                </h1>
                <nav className='gnb'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='lang'>
                    <button
                        type='button'
                        className={locale === 'ko' ? 'on' : ''}
                        onClick={() => setLocale('ko')}
                    >
                        KOR
                    </button>
                    <button
                        type='button'
                        className={locale === 'ja' ? 'on' : ''}
                        onClick={() => setLocale('ja')}
                    >
                        JPN
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
