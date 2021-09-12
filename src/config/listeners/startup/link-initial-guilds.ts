import { Guild } from 'discord.js';
import { deblog } from 'shared/utils';
import { useDispatch, useSelector } from 'store';
import { fetchGuilds, selectGuilds } from 'store/reducers/guilds';

const linkGuild = ({ name }: Guild) =>
  deblog('notice', 'setup.guilds.link', { name });

const linkGuilds = async (guilds: Guild[]) => guilds.forEach(linkGuild);

export const linkInitialGuilds = async () => {
  deblog('notice', 'setup.guilds.linkStarted');

  await useDispatch(fetchGuilds());
  const { list, total } = useSelector(selectGuilds);
  await linkGuilds(list);

  deblog('notice', 'setup.guilds.total', { total });
  deblog('notice', 'setup.guilds.linkFinished');
};
