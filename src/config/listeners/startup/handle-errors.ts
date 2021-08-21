import client from 'shared/client';
import { handleError } from 'shared/actions';

client.once('error', handleError);
