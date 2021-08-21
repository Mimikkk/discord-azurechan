import { CommandInteraction, MessageEmbed } from 'discord.js';
export const handleEvent = (interaction: CommandInteraction) => {
  const embed = new MessageEmbed({ description: 'event' });
  interaction.reply({ embeds: [embed] });
};
