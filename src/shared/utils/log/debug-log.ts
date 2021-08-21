import { LogType } from 'shared/utils/log/types';
import { formatLog } from './format';

export const log = (type: LogType, message: string, extra?: string) =>
  console.log(formatLog(type, message), extra || '');
export const fplog = (type: LogType, message: string, extra?: string) => () =>
  log(type, message, extra);
