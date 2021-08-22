import { Guild, GuildChannel } from 'discord.js';

const service = {
  fetchChannels: async (guild: Guild): Promise<GuildChannel[]> => [
    ...(await guild.channels.fetch()).values(),
  ],
};
export default service;
