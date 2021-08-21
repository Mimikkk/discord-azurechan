import i18n from 'i18next';
import { LogType } from './types';

const t = (key: string) => i18n.t(`${key}`);

export const loggerCache = {
  previousType: null,
};

export const formatLog = (type: LogType, message: string): string => {
  const isPreviousType = type !== loggerCache.previousType;
  const base = isPreviousType
    ? `${t('discord')}::${t(`messages.logtype.${type}`)}:\n`
    : '';

  loggerCache.previousType = type;
  return `${base}  ${t(`messages.${message}`)}`;
};
