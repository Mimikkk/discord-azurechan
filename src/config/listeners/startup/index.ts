import { OnceReadyFn, OnceErrorFn } from 'shared/types/listeners';
import { onceError } from './once-error';
import { generateInvite } from './generate-invite';

export const OnceError: readonly OnceErrorFn[] = [onceError].flat();

export const OnceReady: readonly OnceReadyFn[] = [generateInvite].flat();
