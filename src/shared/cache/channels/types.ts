import { TextChannel } from 'discord.js';

export type BuiltinChannel = 'Testing';

export type ChannelCache = Record<BuiltinChannel, TextChannel>;
