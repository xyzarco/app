import { AppCard } from './AppCard';
import { useLanguage } from '../contexts/LanguageContext';

import esignIcon from '../assets/esign.png';
import featherIcon from '../assets/feather.png';
import ksignIcon from '../assets/ksign.png';
import trollstorexIcon from '../assets/trollstorex.png';

interface AppListProps {
    searchQuery: string;
    activeTab: string;
}

export const AppList = ({ searchQuery, activeTab }: AppListProps) => {
    const { t } = useLanguage();
    const apps = [
        {
            name: 'eSign (iOS 11-26)',
            developer: 'Qingdao Rural Commercial Bank Co., Ltd',
            iconColor: 'bg-blue-500 shadow-blue-500/20',
            iconLabel: 'E-Sign',
            iconImage: esignIcon,
            category: 'eSign',
            downloadUrl: 'itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/xyzarco/plist/refs/heads/main/esignqingdao.plist'
        },
        {
            name: 'Feather',
            developer: 'Qingdao Rural Commercial Bank Co., Ltd',
            iconColor: 'bg-indigo-500 shadow-indigo-500/20',
            iconLabel: '',
            iconImage: featherIcon,
            category: 'Other'
        },
        {
            name: 'Scarlet',
            developer: 'Qingdao Rural Commercial Bank Co., Ltd',
            iconColor: 'bg-red-500 shadow-red-500/20',
            iconLabel: 'S',
            category: 'Other'
        },
        {
            name: 'TrollStore X',
            developer: 'Qingdao Rural Commercial Bank Co., Ltd',
            iconColor: 'bg-cyan-500 shadow-cyan-500/20',
            iconLabel: 'X',
            iconImage: trollstorexIcon,
            category: 'Other'
        },
        {
            name: 'KSign',
            developer: 'Guangzhou Huahan Educational & Tec...',
            iconColor: 'bg-blue-600 shadow-blue-600/20',
            iconLabel: 'KSign',
            iconImage: ksignIcon,
            category: 'KSign'
        },
    ];

    const filteredApps = apps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.developer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === 'All' || app.category === activeTab || (activeTab === 'Other' && !['eSign', 'KSign'].includes(app.category || ''));

        return matchesSearch && matchesTab;
    });

    return (
        <div className="px-6 md:px-8 space-y-3 pb-32">
            {filteredApps.length > 0 ? (
                filteredApps.map((app, index) => (
                    <div
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <AppCard {...app} />
                    </div>
                ))
            ) : (
                <div className="text-center text-gray-500 py-10">
                    {t.noApps}
                </div>
            )}
        </div>
    );
};
