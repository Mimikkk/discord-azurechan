import client from 'shared/client';
import { handleError } from 'shared/actions';
import { fpdeblog } from 'shared/utils';

client.once('ready', fpdeblog('ready'));
client.once('error', handleError);
