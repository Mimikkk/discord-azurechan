import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleGirl = (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'girl' });
  interaction.reply({ embeds: [embed] });
};
