import { OnceReady } from './values';
import client from 'shared/client';
import _ from 'lodash';

const onceReady = async () => {
  _.forEach(OnceReady, async (fn) => await fn());
};

client.once('error', onceReady);
