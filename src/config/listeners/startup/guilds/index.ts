import { OnceReadyFn } from 'shared/types/listeners';
import { OnceReady as CommandsListeners } from './commands';

export const OnceReady: readonly OnceReadyFn[] = [CommandsListeners].flat();
