import { Link } from 'react-router-dom';
import { useLanguage } from '../context';
import './NotFound.css';

export default function NotFound() {
    const { t } = useLanguage();

    const message = {
        ko: '페이지를 찾을 수 없습니다.',
        ja: 'ページが見つかりません。',
        en: 'Page not found.',
    };

    const backHome = {
        ko: '홈으로 돌아가기',
        ja: 'ホームに戻る',
        en: 'Back to Home',
    };

    return (
        <div className='page page-not-found'>
            <div className='page-not-found__inner'>
                <div className='page-not-found__content'>
                    <img
                        className='page-not-found__img'
                        src='/images/notfound.webp'
                        alt=''
                        width='800'
                        height='684'
                    />
                    <p className='page-not-found__code'>404</p>
                    <p className='page-not-found__message'>{t(message)}</p>
                </div>
                <Link to='/' className='page-not-found__home'>
                    {t(backHome)}
                </Link>
            </div>
        </div>
    );
}
