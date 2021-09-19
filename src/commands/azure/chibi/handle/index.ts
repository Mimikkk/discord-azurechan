import { handleNamed } from './named';
import { handleRandom } from './random';
import { CommandInteraction } from 'discord.js';

export const handleChibi = async (interaction: CommandInteraction) => {
  switch (interaction.options.getSubcommand()) {
    case 'random':
      return await handleRandom(interaction);
    case 'named':
      return await handleNamed(interaction);
  }
};
