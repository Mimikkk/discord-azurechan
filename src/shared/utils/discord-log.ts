import { TextChannel } from 'discord.js';
import Channels from 'shared/cache/channels';
import { formatLog } from './util';

export const log = async (s: string, channel: TextChannel = Channels.Testing) =>
  await channel.send({ content: formatLog(s) });

export const fplog =
  (s: string, channel: TextChannel = Channels.Testing) =>
  async () =>
    await log(s, channel);
