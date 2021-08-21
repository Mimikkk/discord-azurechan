import client from 'shared/client';
import { deblog } from 'shared/utils';

export const setup = async () => {
  deblog('error', 'setup.channels.create', 'heck');
  await client.guilds.fetch().then(/*Find and setup correct Testing Channel*/);
  deblog('error', 'setup.channels.create', 'heck');
};
