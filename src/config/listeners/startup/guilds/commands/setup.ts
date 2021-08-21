import { Commands } from 'commands/values';
import { ApplicationCommandData, Guild } from 'discord.js';
import fp from 'lodash/fp';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const setupCommand = (guild: Guild, command: ApplicationCommandData) => {
  deblog('listener', 'setup.commands.create', `${command.name}`);
  guild.commands.create(command);
};

const setupGuildCommands = (guild: Guild) => {
  deblog('listener', 'setup.commands.guild', `${guild.name}`);
  Commands.forEach(fp.curry(setupCommand)(guild));
};

export const setup = async () => {
  deblog('notice', 'setup.commands.start');
  await client.guilds.cache.forEach(setupGuildCommands);
  deblog('approval', 'setup.commands.finish');
};
