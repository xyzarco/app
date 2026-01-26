import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Certs } from './pages/Certs';
import { Upload } from './pages/Upload';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppLayout() {
  const { lang } = useParams();
  const { setLanguage, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang === 'id' || lang === 'en') {
      setLanguage(lang);
    } else {
      navigate('/en', { replace: true });
    }
  }, [lang, setLanguage, navigate]);

  return (
    <div className="min-h-screen bg-background text-white pb-20">
      <div
        key={language}
        className="max-w-md mx-auto min-h-screen bg-background relative shadow-2xl shadow-black animate-fade-in"
      >
        <Header />
        <div key={location.pathname} className="animate-slide-in">
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={
          <LanguageProvider>
            <AppLayout />
          </LanguageProvider>
        }>
          <Route index element={<Home />} />
          <Route path="certs" element={<Certs />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
