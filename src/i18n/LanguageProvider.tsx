import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language, type TranslationTree } from "./translations";

const STORAGE_KEY = "bpc-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  tr: <T = unknown>(path: string) => T;
  dict: TranslationTree;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolve(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>((acc, key) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined), obj);
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "pt" ? stored : "pt";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = useCallback((lang: Language) => setLanguageState(lang), []);

  const dict = translations[language] as TranslationTree;

  const t = useCallback(
    (path: string) => {
      const value = resolve(translations[language], path);
      return typeof value === "string" ? value : path;
    },
    [language],
  );

  const tr = useCallback(
    <T,>(path: string) => resolve(translations[language], path) as T,
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t, tr, dict }),
    [language, setLanguage, t, tr, dict],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
