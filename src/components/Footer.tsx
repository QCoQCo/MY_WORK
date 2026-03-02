import { profile } from '../data';
import './Footer.css';

const Footer = () => {
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
                <p className='copyright'>
                    © {new Date().getFullYear()}. Kang Yonghoon. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
