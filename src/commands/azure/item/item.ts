import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleItem = async (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'item' });
  await interaction.reply({ embeds: [embed] });
};
