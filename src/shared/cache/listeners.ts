import client from 'shared/client';
import { TextChannel } from 'discord.js';
import Channels, { BuiltinChannel } from './channels';

client.once('ready', () => {
  Channels[BuiltinChannel.Testing] = client.channels.cache.get(
    BuiltinChannel.Testing,
  ) as TextChannel;
});
