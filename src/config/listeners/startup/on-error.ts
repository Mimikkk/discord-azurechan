import chalk from 'chalk';
import client from 'shared/client';
import { shutdown } from 'shared/actions';
import { deblog } from 'shared/utils';

export const onError = ({ name, message }: Error) => {
  deblog(
    `error`,
    'errorEncountered',
    `'${chalk.bold.white(name)}' in '${chalk.yellow(message)}'`,
  );
  shutdown();
};

client.once('error', onError);
