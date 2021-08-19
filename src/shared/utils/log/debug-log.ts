import { formatLog } from './format';

export const log = (message: string) => console.log(formatLog(message));
export const fplog = (message: string) => () => log(message);
