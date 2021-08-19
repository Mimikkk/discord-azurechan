import { TextChannel } from 'discord.js';

export enum BuiltinChannel {
  Testing = '685033364037566465',
}

export type ChannelCache = Record<string, TextChannel>;

const Channels: ChannelCache = {
  [BuiltinChannel.Testing]: null!,
};
export default Channels;
