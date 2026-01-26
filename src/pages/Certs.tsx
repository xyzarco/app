import { ShieldCheck, Plus, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Certs = () => {
    const { t } = useLanguage();

    const mockCerts = [
        { name: 'Khôi dVn Certificate', status: 'Valid', type: 'Enterprise', expires: '2026-12-10' },
        { name: 'Skibiditech Free Cert', status: 'Revoked', type: 'Public', expires: '2025-05-20' },
    ];

    return (
        <div className="px-6 md:px-8 py-6 space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <ShieldCheck className="text-blue-500" size={28} />
                    {t.certsTitle}
                </h1>
                <p className="text-gray-400 text-sm md:text-base">{t.certsSubtitle}</p>
            </div>

            <div className="grid gap-4">
                {mockCerts.map((cert, index) => (
                    <div key={index} className="glass-card p-4 rounded-3xl flex items-center justify-between group hover:border-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cert.status === 'Valid' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                {cert.status === 'Valid' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">{cert.name}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{cert.type}</span>
                                    <span>•</span>
                                    <span>Exp: {cert.expires}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${cert.status === 'Valid' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                            {cert.status.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-4 rounded-3xl bg-blue-600 hover:bg-blue-500 transition-all font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
                <Plus size={20} />
                {t.importCert}
            </button>
        </div>
    );
};
