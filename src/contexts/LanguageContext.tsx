import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'id';

interface Translations {
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    tabAll: string;
    tabOther: string;
    noApps: string;
    get: string;
    signers: string;
    certs: string;
    upload: string;
    alertMessage: string;
    alertLinkText: string;
}

const translations: Record<Language, Translations> = {
    en: {
        heroTitle: "Signed Apps",
        heroSubtitle: "Here are the signed apps that you can try. I've tried several of them on an iPhone 7 Plus with iOS 15 (old version) and they work. If they don't work, the only thing you can do is wait for another update. Don't forget to install the DNS profile first (to prevent revocation).\n\nThanks to Skibiditech and Khoindvn for the inspiration.",
        searchPlaceholder: "Search signing apps...",
        tabAll: "All",
        tabOther: "Other",
        noApps: "No apps found",
        get: "GET",
        signers: "Signers",
        certs: "Certs",
        upload: "Upload",
        alertMessage: "Beware of influencers selling free sideloading materials. If you have extra money, please buy a paid certificate ",
        alertLinkText: "here"
    },
    id: {
        heroTitle: "Aplikasi Signed",
        heroSubtitle: "Berikut adalah aplikasi yang sudah di-sign dan dapat kamu coba. Aku udah coba beberapa di iPhone 7 Plus dengan iOS 15 (versi lama) dan berfungsi. Kalau misalnya nggak bisa, satu satunya cara adalah menunggu sampai ada update lagi. Jangan lupa untuk menginstal profil DNS terlebih dahulu (untuk mencegah revoke).\n\nTerima kasih kepada Skibiditech dan Khoindvn atas inspirasinya.",
        searchPlaceholder: "Cari aplikasi...",
        tabAll: "Semua",
        tabOther: "Lainnya",
        noApps: "Tidak ada aplikasi ditemukan",
        get: "UNDUH",
        signers: "Penanda",
        certs: "Sertifikat",
        upload: "Unggah",
        alertMessage: "Hati hati terhadap influencer yang jualan bahan gratisan untuk sideload. Kalau kamu punya uang lebih, silahkan beli sertifikat berbayar ",
        alertLinkText: "disini"
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
