import { Guild } from 'discord.js';
import { deblog } from 'shared/utils';
import { useSelector } from 'store';
import { selectGuilds } from 'store/reducers/guilds';

const clearSlashCommandsFromGuild = async (guild: Guild) => {
  deblog('notice', 'setup.commands.clear.from', { name: guild.name });
  const commands = await guild.commands.fetch();

  for (let snowflake of commands.keys()) {
    await guild.commands.delete(snowflake);
  }
};

export const clearSlashCommands = async () => {
  deblog('notice', 'setup.commands.clear.start');
  const { list } = useSelector(selectGuilds);
  for (const guild of list) await clearSlashCommandsFromGuild(guild);
  deblog('notice', 'setup.commands.clear.finish');
};
