import { Collection, Message, Snowflake } from 'discord.js';
import { Channels } from 'shared/cache';
import { deblog } from 'shared/utils';

const deleteMessage = (message: Message) => message.delete();

const deleteMessages = (messages: Collection<Snowflake, Message>) =>
  messages.forEach(deleteMessage);

export const clearMessages = async () => {
  deblog('error', 'setup.channels.clear', 'Testing');
  await Channels.Testing.messages.fetch().then(deleteMessages);
  deblog('error', 'setup.channels.clear', 'Testing');
};
