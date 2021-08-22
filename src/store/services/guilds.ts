import { Guild } from 'discord.js';
import client from 'shared/client';
const service = {
  fetchAuths: async () => [...(await client.guilds.fetch()).values()],
  fetchGuilds: async () => {
    const auths = await service.fetchAuths();
    const guilds: Guild[] = [];
    for (const auth of auths) guilds.push(await auth.fetch());
    return guilds;
  },
};

export default service;
