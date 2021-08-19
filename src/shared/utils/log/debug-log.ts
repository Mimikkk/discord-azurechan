import { LogType } from 'shared/utils/log/types';
import { formatLog } from './format';

export const log = (message: string, type?: LogType) =>
  console.log(formatLog(message, type));
export const fplog = (message: string, type?: LogType) => () =>
  log(message, type);
