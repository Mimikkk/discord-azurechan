import client from 'shared/client';
import { deblog } from 'shared/utils';
import chalk from 'chalk';

export const handleError = ({ name, message }: Error) => {
  deblog(
    chalk.red(
      `Error Encountered '${chalk.bold.white(name)}' with '${chalk.yellow(
        message,
      )}'`,
    ),
  );
  shutdown();
};

const login = async () => {
  deblog('logging in');
  await client.login(process.env.TOKEN);
};

export const startup = async () => {
  deblog(chalk.green('Getting Started...'));
  await login();
};

export const shutdown = () => {
  deblog(chalk.red('Shutting Down...'));
  client.destroy();
  process.exit();
};
