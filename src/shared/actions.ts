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
  deblog('loggingIn');
  await client.login(process.env.TOKEN);
  deblog('loggedIn');
};

export const startup = async () => {
  deblog('startup');
  await login();
};

export const shutdown = () => {
  deblog('shutdown');
  client.destroy();
  process.exit();
};
