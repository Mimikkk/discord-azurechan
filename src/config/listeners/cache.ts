import client from 'shared/client';
import { TextChannel } from 'discord.js';
import { deblog } from 'shared/utils';
import Channels, { BuiltinChannel } from 'shared/cache/channels';

client.once('ready', () => {
  deblog('setup.testingChannel', 'listener');
  Channels[BuiltinChannel.Testing] = client.channels.cache.get(
    BuiltinChannel.Testing,
  ) as TextChannel;
});
