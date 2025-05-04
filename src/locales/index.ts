
import { ru } from './ru';
import { en } from './en';

export const locales = {
  ru,
  en
};

export type LocaleType = keyof typeof locales;
export type LocaleString = typeof ru;
