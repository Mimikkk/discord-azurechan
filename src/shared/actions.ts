import client from 'shared/client';
import { deblog, fpdeblog } from 'shared/utils';

const login = async () => {
  deblog('notice', 'loggingIn');
  await client.login(process.env.TOKEN);
};

export const startup = async () => {
  deblog('notice', 'startStartup');
  await login()
    .then(fpdeblog('approval', 'loggedIn'))
    .catch(fpdeblog('error', 'loggingInFailed'));
  deblog('notice', 'finishStartup');
};

export const shutdown = () => {
  deblog('notice', 'shutdown');
  client.destroy();
  process.exit();
};
