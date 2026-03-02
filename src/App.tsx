import './App.css';
import { Header, Footer, LocalNav, TopBtn, AnimatedBackground, ScrollToTop } from './components';
import { Home, About, Projects, Skills, Contact } from './pages';
import { LanguageProvider } from './context';
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();
    const showAnimatedBg = pathname !== '/';

    return (
        <div id='wrapper' className={showAnimatedBg ? 'wrapper--with-animated-bg' : ''}>
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
    return (
        <div id='app'>
            <LanguageProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='projects' element={<Projects />} />
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
