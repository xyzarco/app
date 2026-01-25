import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="px-6 md:px-8 py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{t.heroTitle}</h1>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line">{t.heroSubtitle}</p>
        </div>
    );
};
