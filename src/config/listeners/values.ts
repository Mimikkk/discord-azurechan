import {
  OnceError as OnceErrorStartup,
  OnceReady as OnceReadyStartup,
} from './startup';
import { OnceErrorFn, OnceReadyFn } from 'shared/types/listeners';

export const OnceReady: OnceReadyFn[] = [OnceReadyStartup].flat();
export const OnceError: OnceErrorFn[] = [OnceErrorStartup].flat();
