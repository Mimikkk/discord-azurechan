import { OnceError } from './values';
import client from 'shared/client';

const onceError = async (error: Error) => {
  for (const fn of OnceError) await fn(error);
};

client.once('error', onceError);
