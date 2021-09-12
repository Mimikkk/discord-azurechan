import { commands } from 'commands/values';
import { ApplicationCommandData, Guild } from 'discord.js';
import { deblog } from 'shared/utils';
import { useSelector } from 'store';
import { selectGuilds } from 'store/reducers/guilds';

const generateSlashCommand = async (
  guild: Guild,
  command: ApplicationCommandData,
) => {
  deblog('listener', 'setup.commands.add.create', { name: command.name });
  await guild.commands.create(command);
};

const generateServerSlashCommands = async (guild: Guild) => {
  deblog('listener', 'setup.commands.add.for', { name: guild.name });
  for (let command of commands) await generateSlashCommand(guild, command);
};

export const generateSlashCommands = async () => {
  deblog('listener', 'setup.commands.add.start');
  const { list } = useSelector(selectGuilds);
  for (const guild of list) await generateServerSlashCommands(guild);
  deblog('listener', 'setup.commands.add.finish');
};
