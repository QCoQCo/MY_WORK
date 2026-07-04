import './App.css';
import { Header, Footer, LocalNav, TopBtn, AnimatedBackground, ScrollToTop } from './components';
import { Home, About, Projects, ProjectDetail, Skills, Contact } from './pages';
import { LanguageProvider } from './context';
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';

const GameOverlay = lazy(() => import('./game/GameOverlay'));

const Layout = () => {
    const { pathname } = useLocation();
    const showAnimatedBg = pathname !== '/';

    return (
        <div id='wrapper' className={showAnimatedBg ? 'wrapper--with-animated-bg' : 'wrapper--home'}>
            {showAnimatedBg && <AnimatedBackground />}
            <Header />
            <LocalNav />
            <main id='main-content'>
                <Outlet />
            </main>
            <Footer />
            <TopBtn />
        </div>
    );
};

function App() {
    const [showGame, setShowGame] = useState(false);

    useEffect(() => {
        const handleEasterEgg = () => setShowGame(true);
        window.addEventListener('stellar-easter-egg', handleEasterEgg);
        return () => window.removeEventListener('stellar-easter-egg', handleEasterEgg);
    }, []);

    const handleCloseGame = () => setShowGame(false);

    return (
        <div id='app'>
            {showGame && (
                <Suspense fallback={<div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
                    <GameOverlay onClose={handleCloseGame} />
                </Suspense>
            )}
            <LanguageProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='projects' element={<Projects />} />
                            <Route path='projects/:id' element={<ProjectDetail />} />
                            <Route path='skills' element={<Skills />} />
                            <Route path='contact' element={<Contact />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LanguageProvider>
        </div>
    );
}

export default App;
