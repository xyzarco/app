import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tabs } from './components/Tabs';
import { SearchBar } from './components/SearchBar';
import { AppList } from './components/AppList';
import { BottomNav } from './components/BottomNav';
import { WarningAlert } from './components/WarningAlert';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppLayout() {
  const { lang } = useParams();
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (lang === 'id' || lang === 'en') {
      setLanguage(lang);
    } else {
      navigate('/en', { replace: true });
    }
  }, [lang, setLanguage, navigate]);

  return (
    <div className="min-h-screen bg-background text-white pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-background relative shadow-2xl shadow-black">
        <Header />
        <Hero />
        <WarningAlert />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <AppList searchQuery={searchQuery} activeTab={activeTab} />
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
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
