import i18n from 'i18next';
import { LogType } from './types';

const t = (key: string, args?: object) => i18n.t(`${key}`, args);

export const loggerCache = {
  previousType: null,
};

export const formatLog = (
  type: LogType,
  message: string,
  args?: object,
): string => {
  const isPreviousType = type !== loggerCache.previousType;
  const base = isPreviousType
    ? `${t('discord')}::${t(`messages.logtype.${type}`, args)}:\n`
    : '';

  loggerCache.previousType = type;
  return `${base}  ${t(`messages.${message}`, args)}`;
};
