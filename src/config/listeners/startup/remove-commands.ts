import { ApplicationCommand, GuildResolvable } from 'discord.js';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const deleteCommand = (
  command: ApplicationCommand<{ guild: GuildResolvable }>,
) => command.delete();

export const removeCommands = () => {
  deblog('notice', 'setup.commands.cleanup');
  client.application.commands.cache.forEach(deleteCommand);
};

client.once('ready', removeCommands);
