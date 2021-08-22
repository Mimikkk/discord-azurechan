import { TextChannel } from 'discord.js';
import { useSelect } from 'store';
import { LogType } from './types';
import { formatLog } from './format';

export const log = async (
  type: LogType,
  message: string,
  channel: TextChannel = useSelect(selectChannels).Testing,
) => await channel.send({ content: formatLog(type, message) });

export const fplog =
  (
    type: LogType = 'notice',
    message: string,
    channel: TextChannel = useSelect(selectChannels).Testing,
  ) =>
  async () =>
    await log(type, message, channel);
