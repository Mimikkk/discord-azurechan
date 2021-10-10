import { CommandInteraction } from 'discord.js';
import { randomShip } from 'services/azure-service';
import { shipReply } from 'commands/azure/chibi/utils';

export const handleRandom = async (interaction: CommandInteraction) =>
  await interaction.reply(shipReply(randomShip()));
