import chalk from 'chalk';
import i18n from 'i18next';

const t = (key: string) => i18n.t(`messages.${key}`);

export const formatLog = (message: string): string =>
  `${chalk.blue('Discord')}: ${t(message)}`;
