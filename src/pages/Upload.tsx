import { Upload as UploadIcon, FileUp, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Upload = () => {
    const { t, language } = useLanguage();

    return (
        <div className="relative min-h-[calc(100vh-140px)]">
            {/* Blurred Content */}
            <div className="px-6 md:px-8 py-6 space-y-6 blur-md pointer-events-none select-none opacity-50 transition-all duration-700">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                        <UploadIcon className="text-purple-500" size={28} />
                        {t.uploadTitle}
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base">{t.uploadSubtitle}</p>
                </div>

                <div className="aspect-square w-full glass-card rounded-[2.5rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group cursor-pointer bg-gradient-to-b from-transparent to-purple-500/5">
                    <div className="w-20 h-20 rounded-3xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <FileUp size={40} />
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-white mb-1">{t.selectIPA}</p>
                        <p className="text-xs text-gray-500">Max size: 2GB</p>
                    </div>
                </div>

                <div className="glass-card p-6 rounded-[2rem] space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Quick Sign</h3>
                            <p className="text-xs text-gray-500">Sign apps instantly with your active cert</p>
                        </div>
                    </div>
                    <button className="w-full py-3 rounded-2xl bg-white/5 text-sm font-semibold border border-white/5">
                        Sign Multiple Apps
                    </button>
                </div>
            </div>

            {/* Overlay Message */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-10">
                <div className="glass p-8 rounded-[2.5rem] text-center space-y-3 shadow-2xl shadow-black animate-fade-in-up border-white/20">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Zap size={32} className="text-white fill-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{t.comingSoon}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                        {language === 'en'
                            ? "Sideload system is currently under development."
                            : "Sistem sideload sedang dalam tahap pengembangan."}
                    </p>
                </div>
            </div>
        </div>
    );
};
