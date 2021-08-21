import { Commands } from 'commands/values';
import { ApplicationCommandData, Guild } from 'discord.js';
import client from 'shared/client';
import { deblog } from 'shared/utils';
import fp from 'lodash/fp';

const setupCommand = (guild: Guild, command: ApplicationCommandData) => {
  deblog('listener', 'setup.commands.create', `${command.name}`);
  guild.commands.create(command);
};

const setupGuildCommands = (guild: Guild) => {
  deblog('listener', 'setup.commands.guild', `${guild.name}`);
  Commands.forEach(fp.curry(setupCommand)(guild));
};

export const setupGuildsCommands = () => {
  deblog('notice', 'setup.commands.start');
  client.guilds.cache.forEach(setupGuildCommands);
  deblog('approval', 'setup.commands.finish');
};
