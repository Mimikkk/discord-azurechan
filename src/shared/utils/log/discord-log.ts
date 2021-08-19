import { TextChannel } from 'discord.js';
import Channels from 'shared/cache/channels';
import { LogType } from 'shared/utils/log/types';
import { formatLog } from './format';

export const log = async (
  s: string,
  type?: LogType,
  channel: TextChannel = Channels.Testing,
) => await channel.send({ content: formatLog(s) });

export const fplog =
  (s: string, type?: LogType, channel: TextChannel = Channels.Testing) =>
  async () =>
    await log(s, type, channel);
