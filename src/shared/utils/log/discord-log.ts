import { Channels } from 'shared/cache/channels/channels';
import { TextChannel } from 'discord.js';
import { LogType } from './types';
import { formatLog } from './format';

export const log = async (
  type: LogType,
  message: string,
  channel: TextChannel = Channels.Testing,
) => await channel.send({ content: formatLog(type, message) });

export const fplog =
  (
    type: LogType = 'notice',
    message: string,
    channel: TextChannel = Channels.Testing,
  ) =>
  async () =>
    await log(type, message, channel);
