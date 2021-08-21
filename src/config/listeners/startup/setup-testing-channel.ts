import client from 'shared/client';
import { TextChannel } from 'discord.js';
import { deblog } from 'shared/utils';
import { Channels, BuiltinChannel } from 'shared/cache/channels';

const setupTestingChannel = () => {
  deblog('listener', 'setup.testingChannel');
  Channels[BuiltinChannel.Testing] = client.channels.cache.get(
    BuiltinChannel.Testing,
  ) as TextChannel;
};

client.once('ready', setupTestingChannel);
