import chalk from 'chalk';
import client from './client.discord';
import { shutdown } from './flow.actions';

const onceReady = () => {
  console.error(`${chalk.blue('Discord')}: ${chalk.green('Ready!')}`);
  setTimeout(shutdown, 2000);
};
client.once('ready', onceReady);
