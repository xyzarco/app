import React from 'react';
import { PenTool, ShieldCheck, Upload } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const BottomNav: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl shadow-black/50 border border-white/10">
                <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <PenTool size={20} />
                    </div>
                    <span className="text-[10px] font-medium text-blue-400 group-hover:text-blue-400">{t.signers}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-all">
                        <ShieldCheck size={20} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300">{t.certs}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-all">
                        <Upload size={20} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300">{t.upload}</span>
                </button>
            </div>
        </div>
    );
};
