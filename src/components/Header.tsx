import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context';
import './Header.css';

const SCROLL_THRESHOLD = 50;

const NAV_ITEMS = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
] as const;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { locale, setLocale } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        const handleResize = () => {
            if (window.innerWidth > 768) setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleEscape);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header id='header' className={scrolled ? 'on' : ''}>
            <div className='hd_inner'>
                <h1 className='logo'>
                    <Link to='/' onClick={closeMenu}>CO_s_MOS</Link>
                </h1>

                <nav className='gnb' aria-label='메인 메뉴'>
                    <ul>
                        {NAV_ITEMS.map(({ path, label }) => (
                            <li key={path}>
                                <Link to={path} onClick={closeMenu}>{label}</Link>
                            </li>
                        ))}
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
                    <button
                        type='button'
                        className={locale === 'en' ? 'on' : ''}
                        onClick={() => setLocale('en')}
                    >
                        ENG
                    </button>
                </div>

                <button
                    type='button'
                    className='hd_ham'
                    aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((v) => !v)}
                >
                    <span className='hd_ham__bar' />
                    <span className='hd_ham__bar' />
                    <span className='hd_ham__bar' />
                </button>
            </div>

            {createPortal(
                <div
                    className={`hd_drawer ${isMenuOpen ? 'hd_drawer--open' : ''}`}
                    aria-hidden={!isMenuOpen}
                >
                    <div className='hd_drawer__backdrop' onClick={closeMenu} aria-hidden />
                    <div className='hd_drawer__panel'>
                        <nav className='hd_drawer__nav' aria-label='모바일 메뉴'>
                            <ul>
                                {NAV_ITEMS.map(({ path, label }) => (
                                    <li key={path}>
                                        <Link to={path} onClick={closeMenu}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className='hd_drawer__lang'>
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
                            <button
                                type='button'
                                className={locale === 'en' ? 'on' : ''}
                                onClick={() => setLocale('en')}
                            >
                                ENG
                            </button>
                        </div>
                    </div>
                </div>,
                document.body,
            )}
        </header>
    );
};

export default Header;
