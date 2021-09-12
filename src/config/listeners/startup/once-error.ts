import { shutdown } from 'shared/actions';
import { deblog } from 'shared/utils';

export const onceError = async ({ name, message }: Error) => {
  deblog(`error`, 'errorEncountered', { name, message });
  shutdown();
};
