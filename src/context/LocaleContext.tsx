
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { locales, LocaleType, LocaleString } from '../locales';

interface LocaleContextType {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  t: (path: string, params?: Record<string, any>) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  defaultLocale?: LocaleType;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  defaultLocale = 'ru'
}) => {
  const [locale, setLocale] = useState<LocaleType>(defaultLocale);

  // Функция перевода
  const t = (path: string, params?: Record<string, any>): string => {
    const keys = path.split('.');
    let value: any = locales[locale];
    
    for (const key of keys) {
      if (!value[key]) return path;
      value = value[key];
    }
    
    if (typeof value !== 'string') return path;
    
    if (params) {
      return Object.entries(params).reduce((acc, [key, val]) => {
        return acc.replace(new RegExp(`{${key}}`, 'g'), val.toString());
      }, value);
    }
    
    return value;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  
  return context;
};
