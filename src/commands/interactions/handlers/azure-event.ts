import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleAzureEvent = (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'event' });
  interaction.reply({ embeds: [embed] });
};
