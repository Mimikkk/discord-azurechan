import { OnceReadyFn } from 'shared/types/listeners';
import { remove } from './remove';
import { setup } from './setup';

export const OnceReady: readonly OnceReadyFn[] = [remove, setup];
