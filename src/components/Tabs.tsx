import React from 'react';
import { clsx } from 'clsx';
import { useLanguage } from '../contexts/LanguageContext';

interface TabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
    const { t } = useLanguage();

    // Define tabs with stable identifiers and translated labels
    const tabs = [
        { id: 'All', label: t.tabAll },
        { id: 'eSign', label: 'eSign' },
        { id: 'KSign', label: 'KSign' },
        { id: 'Other', label: t.tabOther }
    ];

    return (
        <div className="px-6 md:px-8 relative z-10">
            <div className="flex bg-[#151921] p-1 rounded-2xl border border-white/5 w-full md:w-auto overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={clsx(
                            "flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap",
                            activeTab === tab.id
                                ? "bg-blue-600/90 text-white shadow-lg shadow-blue-500/20"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
