import client from 'shared/client';
import { deblog, fpdeblog } from 'shared/utils';

const login = async () => {
  deblog('notice', 'loggingIn');
  await client.login(process.env.ARK_CHAN).catch(console.log);
};

export const startup = async () => {
  deblog('notice', 'startStartup');
  await login()
    .then(fpdeblog('approval', 'loggedIn'))
    .catch((error) => fpdeblog('error', 'loggingInFailed', { error }));
  deblog('notice', 'finishStartup');
};

export const shutdown = () => {
  deblog('notice', 'shutdown');
  client.destroy();
  process.exit();
};
