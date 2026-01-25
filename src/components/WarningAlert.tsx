import React from 'react';
import { TriangleAlert } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WarningAlert: React.FC = () => {
    const { t, language } = useLanguage();

    if (language !== 'id') {
        return null;
    }

    return (
        <div className="mx-6 md:mx-8 mb-6 bg-[#1A1A1A] border-l-4 border-yellow-500 rounded-r-lg p-4 flex items-start gap-3">
            <TriangleAlert className="text-yellow-500 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-gray-300 leading-relaxed">
                {t.alertMessage}
                <a
                    href="https://ams1gn.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/50 hover:decoration-yellow-500 transition-colors"
                >
                    {t.alertLinkText}
                </a>
            </p>
        </div>
    );
};
