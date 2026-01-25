import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    const { t } = useLanguage();

    return (
        <div className="px-6 md:px-8 mt-6 mb-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#151921] border border-white/5 rounded-2xl text-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                    placeholder={t.searchPlaceholder}
                />
            </div>
        </div>
    );
};
