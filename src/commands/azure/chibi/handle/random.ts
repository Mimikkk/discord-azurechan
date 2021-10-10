import { CommandInteraction } from 'discord.js';
import { randomShip } from 'services/azure-service';
import { replyShips } from './named';

export const handleRandom = async (interaction: CommandInteraction) =>
  await interaction.reply(replyShips([randomShip()]));
