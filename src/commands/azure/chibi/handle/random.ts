import { createChibiEmbed } from 'commands/azure/embeds';
import { CommandInteraction } from 'discord.js';
import { randomShip } from 'services/azure-service';

export const handleRandom = async (interaction: CommandInteraction) => {
  const { id } = randomShip();
  await interaction.reply({ embeds: [createChibiEmbed(id)] });
};
