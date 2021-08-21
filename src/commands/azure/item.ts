import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleItem = (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'item' });
  interaction.reply({ embeds: [embed] });
};
