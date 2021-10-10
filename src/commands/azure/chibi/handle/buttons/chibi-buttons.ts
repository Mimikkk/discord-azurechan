import { createSkinMenu } from 'commands/azure/chibi/utils';
import { createChibiEmbed } from 'commands/azure/embeds';
import { MessageActionRow, MessageButton } from 'discord.js';
import { OnButtonFn } from 'shared/types/listeners';

export const handleChibiButtons: OnButtonFn = async (interaction) => {
  const buttons = (interaction.message.components as MessageActionRow[])
    .filter((row) =>
      row.components.some((component) => component.type === 'BUTTON'),
    )
    .map((row) => {
      const buttons = row.components as MessageButton[];
      buttons.map((button) => button.setStyle('DANGER'));
      return row;
    });

  const button = interaction.component as MessageButton;
  const name = button.label;

  button.setStyle('SUCCESS');
  await interaction.update({
    embeds: [createChibiEmbed(name)],
    components: [...buttons, createSkinMenu(name)],
  });
};
