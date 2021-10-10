import { createSkinMenu } from 'commands/azure/chibi/utils';
import { createChibiEmbed } from 'commands/azure/embeds';
import { MessageActionRow } from 'discord.js';
import { OnSelectFn } from 'shared/types/listeners';

export const handleChibiSelects: OnSelectFn = async (interaction) => {
  const [name, skin] = interaction.values[0].split('-');
  const buttons = (interaction.message.components as MessageActionRow[]).filter(
    (row) => row.components.some((x) => x.type === 'BUTTON'),
  );

  await interaction.update({
    embeds: [createChibiEmbed(name, Number(skin))],
    components: [...buttons, createSkinMenu(name, Number(skin))],
  });
};
