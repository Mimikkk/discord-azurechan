import { createChibiEmbed } from 'commands/azure/embeds';
import { randomInt } from 'crypto';
import { CommandInteraction } from 'discord.js';
import { azureService } from 'services';

export const handleRandom = async (interaction: CommandInteraction) => {
  const ship =
    azureService.ships.raw[randomInt(0, azureService.ships.raw.length)];
  await interaction.reply({ embeds: [createChibiEmbed(ship.id)] });
};
