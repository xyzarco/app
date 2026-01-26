import { useState } from 'react';
import { Hero } from '../components/Hero';
import { WarningAlert } from '../components/WarningAlert';
import { Tabs } from '../components/Tabs';
import { SearchBar } from '../components/SearchBar';
import { AppList } from '../components/AppList';
import { SocialIcons } from '../components/SocialIcons';

export const Home = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Hero />
            <WarningAlert />
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <AppList searchQuery={searchQuery} activeTab={activeTab} />
            <SocialIcons />
        </>
    );
};
