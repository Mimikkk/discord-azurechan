import { deblog } from 'shared/utils';

const generateSlashCommand = () => {
  deblog('listener', 'setup.commands.create');
};

const generateServerSlashCommands = () => {
  deblog('listener', 'setup.commands.guild');
};

export const generateSlashCommands = () => {
  deblog('listener', 'setup.commands.start');
  deblog('listener', 'setup.commands.finish');
};
