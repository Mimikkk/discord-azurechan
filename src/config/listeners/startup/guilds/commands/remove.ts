import {
  ApplicationCommand,
  Collection,
  GuildResolvable,
  Snowflake,
} from 'discord.js';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const deleteCommand = async (
  command: ApplicationCommand<{ guild: GuildResolvable }>,
) => {
  await command.delete();
};

const deleteCommands = async (
  commands: Collection<
    Snowflake,
    ApplicationCommand<{ guild: GuildResolvable }>
  >,
) => {
  await commands.forEach(deleteCommand);
};

export const remove = async () => {
  deblog('notice', 'setup.commands.cleanup');
  client.application.commands.fetch().then(deleteCommands);
};
