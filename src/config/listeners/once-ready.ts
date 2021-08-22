import { OnceReady } from './values';
import client from 'shared/client';

const onceReady = async () => {
  for (const fn of OnceReady) await fn();
};

client.once('ready', onceReady);
