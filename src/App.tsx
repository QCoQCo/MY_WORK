import './App.css';
import { Header, Footer, LocalNav, TopBtn } from './components';
import { Home, About, Projects, Skills, Contact } from './pages';
import { LanguageProvider } from './context';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const Layout = () => {
    return (
        <div id='wrapper'>
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
