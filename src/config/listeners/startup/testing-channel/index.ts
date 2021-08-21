import { OnceReadyFn } from 'shared/types/listeners';
import { setup } from './setup';
import { clearMessages } from './clear-messages';

export const OnceReady: readonly OnceReadyFn[] = [setup, clearMessages];
