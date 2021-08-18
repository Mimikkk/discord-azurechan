import { startup } from './shared/actions';
import { config } from 'dotenv';
import fp from 'lodash/fp';
import './listeners';

fp.pipe(config, startup)().catch(console.error);
