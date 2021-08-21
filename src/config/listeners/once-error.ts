import { OnceError } from './values';
import client from 'shared/client';
import _ from 'lodash';

const onceError = async (error: Error) => {
  _.forEach(OnceError, async (fn) => await fn(error));
};

client.once('error', onceError);
