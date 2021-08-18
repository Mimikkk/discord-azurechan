import client from './client.discord';
import { message } from './message';
import chalk from 'chalk';

export const handleError = (error?: string) => {
  if (error) console.error(error);
  shutdown();
};

const login = async () =>
  await client.login(process.env.TOKEN!).catch(handleError);

export const startup = async () => {
  message(chalk.green('Getting Started...'));
  await login();
};
export const shutdown = () => {
  message(chalk.red('Shutting Down...'));
  client.destroy();
  process.exit();
};
