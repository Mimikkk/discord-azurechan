import { CommandInteraction, MessageEmbed } from 'discord.js';

export const handleEvent = async (
  interaction: CommandInteraction,
): Promise<void> => {
  const embed = new MessageEmbed({ description: 'event' });
  await interaction.reply({ embeds: [embed] });
};
