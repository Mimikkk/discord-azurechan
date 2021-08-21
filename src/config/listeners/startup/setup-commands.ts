import { setupGuildsCommands } from 'commands/setup-handlers';
import client from 'shared/client';

client.once('ready', setupGuildsCommands);
