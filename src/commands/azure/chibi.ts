import { CommandInteraction, MessageEmbed } from 'discord.js';

export const handleChibi = async (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'chibi' });
  await interaction.reply({ embeds: [embed] });
};
