import { clearSlashCommands } from 'config/listeners/startup/clear-slash-commands';
import { OnceReadyFn, OnceErrorFn } from 'shared/types/listeners';
import { generateSlashCommands } from './generate-slash-commands';
import { linkInitialGuilds } from 'config/listeners/startup/link-initial-guilds';
import { onceError } from './once-error';
import { generateInvite } from './generate-invite';

export const OnceError: readonly OnceErrorFn[] = [onceError].flat();

export const OnceReady: readonly OnceReadyFn[] = [
  generateInvite,
  linkInitialGuilds,
  clearSlashCommands,
  generateSlashCommands,
].flat();
