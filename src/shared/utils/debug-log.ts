import { formatLog } from './util';

export const log = (message: string) => console.log(formatLog(message));
export const fplog = (message: string) => () => log(message);
