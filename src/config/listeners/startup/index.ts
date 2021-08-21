import { OnceReadyFn, OnceErrorFn } from 'shared/types/listeners';
import { onceError } from './once-error';
import { generateInvite } from './generate-invite';
import { OnceReady as OnceReadyTestingChannel } from './testing-channel';
import { OnceReady as OnceReadyGuilds } from './guilds';

export const OnceError: readonly OnceErrorFn[] = [onceError].flat();

export const OnceReady: readonly OnceReadyFn[] = [
  generateInvite,
  OnceReadyTestingChannel,
  OnceReadyGuilds,
].flat();
