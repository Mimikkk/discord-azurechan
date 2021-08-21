import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleChibi = (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'chibi' });
  interaction.reply({ embeds: [embed] });
};
