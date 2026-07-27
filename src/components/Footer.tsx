import { profile } from '../data';
import './Footer.css';
import { useState, useRef, useCallback } from 'react';

const Footer = () => {
    const [, setClickCount] = useState(0);
    // const [isFooterEnd, setIsFooterEnd] = useState(false);
    const timeoutRef = useRef<number | ReturnType<typeof setTimeout> | null>(null);

    const handleVersionClick = useCallback(() => {
        setClickCount((prev) => {
            const nextCount = prev + 1;
            if (nextCount >= 5) {
                window.dispatchEvent(new CustomEvent('stellar-easter-egg'));
                return 0;
            }
            return nextCount;
        });

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setClickCount(0);
        }, 1000);
    }, []);

    return (
        <footer id='footer'>
            <div className='ft_inner'>
                <div className='ft_contact'>
                    <ul>
                        <li>
                            <span className='label'>E.</span>
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        </li>
                        <li>
                            <span className='label'>G.</span>
                            <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className='ft_bottom'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <p className='copyright'>
                        © {new Date().getFullYear()}. CO_s_MOS. All Rights Reserved.
                    </p>
                    <span
                        className='version-trigger'
                        onClick={handleVersionClick}
                        style={{
                            cursor: 'pointer',
                            opacity: 0.5,
                            fontSize: '0.8rem',
                            userSelect: 'none',
                        }}
                        title='Version'
                    >
                        v2.4.1-stellar
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
