
import { ru } from './ru';

export const locales = {
  ru
};

export type LocaleType = keyof typeof locales;
export type LocaleString = typeof ru;
