import React from 'react';
import { PenTool, ShieldCheck, Upload } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NavLink, useParams } from 'react-router-dom';

export const BottomNav: React.FC = () => {
    const { t } = useLanguage();
    const { lang } = useParams();

    const navItems = [
        { icon: PenTool, label: t.signers, path: `/${lang}` },
        { icon: ShieldCheck, label: t.certs, path: `/${lang}/certs` },
        { icon: Upload, label: t.upload, path: `/${lang}/upload` },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl shadow-black/50 border border-white/10">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === `/${lang}`}
                        className={({ isActive }) => `flex flex-col items-center gap-1 group transition-all ${isActive ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        {({ isActive }) => (
                            <>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-blue-600 text-white' : 'text-gray-500 group-hover:bg-white/10 group-hover:text-white'}`}>
                                    <item.icon size={20} />
                                </div>
                                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                    {item.label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
