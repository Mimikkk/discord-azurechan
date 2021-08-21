import { TextChannel } from 'discord.js';

export enum BuiltinChannel {
  Testing = '877594468696612914',
}

export type ChannelCache = Record<string, TextChannel>;

export const Channels: ChannelCache = {
  [BuiltinChannel.Testing]: null!,
};
