import { useLanguage } from '../contexts/LanguageContext';

export interface AppCardProps {
    name: string;
    developer: string;
    iconColor: string;
    iconLabel?: string;
    iconImage?: string;
    category?: string;
    downloadUrl?: string;
}

export const AppCard = ({ name, developer, iconColor, iconLabel, iconImage, downloadUrl }: AppCardProps) => {
    const { t } = useLanguage();
    return (
        <div className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:bg-[#1a202b] transition-colors border border-white/5 hover:border-white/10">
            <div className="flex items-center gap-4">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-lg ${iconColor} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    {/* Abstract icon shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    {iconImage ? (
                        <img src={iconImage} alt={name} className="w-full h-full object-cover relative z-10" />
                    ) : iconLabel ? (
                        <span className="text-white font-bold text-lg relative z-10">{iconLabel}</span>
                    ) : (
                        <div className="w-6 h-6 bg-white/20 rounded-full relative z-10" />
                    )}
                </div>
                <div>
                    <h3 className="text-white font-semibold text-base mb-0.5">{name}</h3>
                    <p className="text-gray-500 text-xs mb-1.5">{developer}</p>
                </div>
            </div>
            {downloadUrl ? (
                <a
                    href={downloadUrl}
                    className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs py-2 px-5 rounded-full shadow-lg shadow-blue-600/20 transition-all transform active:scale-95 text-center"
                >
                    {t.get}
                </a>
            ) : (
                <button className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs py-2 px-5 rounded-full shadow-lg shadow-blue-600/20 transition-all transform active:scale-95">
                    {t.get}
                </button>
            )}
        </div>
    );
};
