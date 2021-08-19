import client from 'shared/client';
import { deblog, fpdeblog } from 'shared/utils';
import chalk from 'chalk';

export const handleError = ({ name, message }: Error) => {
  deblog(
    chalk.red(
      `Error Encountered '${chalk.bold.white(name)}' with '${chalk.yellow(
        message,
      )}'`,
    ),
    'error',
  );
  shutdown();
};

const login = async () => {
  deblog('loggingIn', 'notice');
  await client.login(process.env.TOKEN);
};

export const startup = async () => {
  deblog('startup', 'notice');
  await login()
    .then(fpdeblog('loggedIn', 'approval'))
    .catch(fpdeblog('loggingInFailed', 'error'));
};

export const shutdown = () => {
  deblog('shutdown', 'notice');
  client.destroy();
  process.exit();
};
