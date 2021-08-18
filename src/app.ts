import { startup } from './flow.actions';
import { config } from 'dotenv';
import fp from 'lodash/fp';
import './startup.listeners';

fp.pipe(config, startup)().catch(console.error);
