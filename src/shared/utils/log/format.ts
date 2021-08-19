import chalk from 'chalk';
import i18n from 'i18next';
import { LogType } from 'shared/utils/log/types';

const t = (key: string) => i18n.t(`messages.${key}`);

export const formatLog = (message: string, type?: LogType): string =>
  `${chalk.blue('Discord')}:${type ? `:${t(`logtype.${type}`)}:` : ''} 
  ${t(message)}`;
