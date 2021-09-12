import { LogType } from './types';
import { formatLog } from './format';

export const log = (type: LogType, message: string, extra?: object) =>
  console.log(formatLog(type, message, extra));
export const fplog = (type: LogType, message: string, extra?: object) => () =>
  log(type, message, extra);
