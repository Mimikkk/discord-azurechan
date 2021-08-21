import { BuiltinChannel, Channels } from 'shared/cache';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const clearTestingChannel = () => {
  deblog('listener', 'setup.channels.clear', 'Testing');
  Channels[BuiltinChannel.Testing].messages.cache.clear();
};
client.once('ready', clearTestingChannel);
