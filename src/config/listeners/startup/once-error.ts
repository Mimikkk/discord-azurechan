import chalk from 'chalk';
import { shutdown } from 'shared/actions';
import { deblog } from 'shared/utils';

export const onceError = async ({ name, message }: Error) => {
  deblog(
    `error`,
    'errorEncountered',
    `'${chalk.bold.white(name)}' in '${chalk.yellow(message)}'`,
  );
  shutdown();
};
