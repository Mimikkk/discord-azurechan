import { OnInteractionHandlers as Handlers } from 'commands';
import { createChibiEmbed } from 'commands/azure/embeds';
import { Interaction, MessageActionRow, MessageButton } from 'discord.js';
import { azureService } from 'services';
import { Skin } from 'services/azure-service';
import client from 'shared/client';

export const createSkinMenu = (name: string, index: number = 0) => {
  const ship = azureService.ships.get(name);
  const createSkinMenuOption = (skin: Skin, i: number) => {
    const description = ({ info }: Skin) => {
      const hasDescription = info.enClient !== undefined;
      return hasDescription
        ? `${info.enClient} - ${info.obtainedFrom}`
        : info.obtainedFrom;
    };

    return {
      label: skin.name,
      description: description(skin),
      value: `${ship.names.en}-${i}`,
      default: i === index,
    };
  };

  return new MessageActionRow({
    components: [
      {
        type: 'SELECT_MENU',
        customId: 'chibi-select',
        options: ship.skins.map(createSkinMenuOption),
      },
    ],
  });
};

export const handleInteractions = async (interaction: Interaction) => {
  if (interaction.isCommand()) Handlers[interaction.commandName](interaction);
  if (interaction.isButton()) {
    if (interaction.customId.startsWith('chibi')) {
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
    }
  }
  if (interaction.isSelectMenu()) {
    if (interaction.customId.startsWith('chibi')) {
      const [name, skin] = interaction.values[0].split('-');
      const buttons = (
        interaction.message.components as MessageActionRow[]
      ).filter((row) => row.components.some((x) => x.type === 'BUTTON'));

      await interaction.update({
        embeds: [createChibiEmbed(name, Number(skin))],
        components: [...buttons, createSkinMenu(name, Number(skin))],
      });
    }
  }
};

client.on('interactionCreate', handleInteractions);
