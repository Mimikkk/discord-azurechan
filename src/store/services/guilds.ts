import { Collection, Guild, Snowflake } from 'discord.js';
import client from 'shared/client';
const service = {
  fetchAuths: async () => client.guilds.fetch(),
  fetchGuilds: async () => {
    const auths = await service.fetchAuths();
    const guilds: Collection<Snowflake, Guild> = new Collection();
    for (const [snowflake, auth] of auths)
      guilds.set(snowflake, await auth.fetch());
    return guilds;
  },
};

export default service;
