import { Collection, Guild, Snowflake } from 'discord.js';
import { GuildsData } from 'store/reducers/guilds/types';

export const handlePayload = (
  payload: Collection<Snowflake, Guild>,
): GuildsData => ({
  snowflakes: [...payload.keys()],
  guilds: [...payload.values()],
  mapBySnowflake: payload,
});
