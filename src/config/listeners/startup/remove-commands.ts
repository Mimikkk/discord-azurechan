import { ApplicationCommand, GuildResolvable } from 'discord.js';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const deleteCommand = (
  command: ApplicationCommand<{ guild: GuildResolvable }>,
) => command.delete();

export const removeCommands = () => {
  client.application.commands.cache.forEach(deleteCommand);
  console.log(client.application.commands.cache.size);
  deblog('cleanupCommands', 'notice');
};

client.once('ready', removeCommands);
