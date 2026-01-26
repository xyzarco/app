import React from 'react';
import tiktokIcon from '../assets/icons/tiktok.webp';
import youtubeIcon from '../assets/icons/youtube.webp';
import telegramIcon from '../assets/icons/telegram.webp';

export const SocialIcons: React.FC = () => {
    const socials = [
        {
            name: 'TikTok',
            icon: tiktokIcon,
            url: 'https://tiktok.com/@xyzarco',
        },
        {
            name: 'YouTube',
            icon: youtubeIcon,
            url: 'https://youtube.com/@xyzarco',
        },
        {
            name: 'Telegram',
            icon: telegramIcon,
            url: 'https://t.me/xyzarco',
        },
    ];

    return (
        <div className="mx-6 md:mx-8 pt-2 pb-32 flex items-center justify-center gap-4">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#252525] hover:border-white/50 group overflow-hidden"
                    title={social.name}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                </a>
            ))}
        </div>
    );
};
