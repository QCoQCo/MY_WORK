import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    type ReactNode,
} from 'react';

export type Locale = 'ko' | 'ja' | 'en';

export interface Translatable {
    ko: string;
    ja: string;
    en?: string;
}

interface LanguageContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (obj: Translatable) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'ko' || saved === 'ja' || saved === 'en') return saved;
    } catch {
        // localStorage 접근 불가 시 기본값 사용
    }
    return 'ja';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

    const setLocale = useCallback((l: Locale) => {
        setLocaleState(l);
        try {
            localStorage.setItem(STORAGE_KEY, l);
        } catch {
            // 저장 실패는 무시
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const t = useCallback(
        (obj: Translatable): string => {
            if (locale === 'ko') return obj.ko;
            if (locale === 'ja') return obj.ja;
            return obj.en ?? obj.ko;
        },
        [locale],
    );

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
