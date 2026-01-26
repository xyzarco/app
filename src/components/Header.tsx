import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'id' : 'en';
        navigate(`/${newLang}`);
    };

    return (
        <header className="sticky top-0 z-40 flex items-center justify-between py-4 px-6 md:px-8 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                    <span className="text-black font-bold text-lg">X</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">xyzarco</span>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-bold text-white border border-white/5 flex items-center gap-1.5"
                >
                    <span>{language === 'en' ? '🇺🇸' : '🇮🇩'}</span>
                    <span>{language.toUpperCase()}</span>
                </button>
            </div>
        </header>
    );
};
