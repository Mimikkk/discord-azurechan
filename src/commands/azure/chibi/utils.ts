import { createChibiEmbed } from 'commands/azure/embeds';
import {
  InteractionReplyOptions,
  MessageActionRow,
  MessageButton,
} from 'discord.js';
import { capitalize } from 'lodash';
import { azureService } from 'services';
import { Ship, Skin } from 'services/azure-service';

export const createShipButton = (ship: Ship, index: number) =>
  new MessageButton({
    type: 'BUTTON',
    style: index === 0 ? 'SUCCESS' : 'DANGER',
    label: capitalize(ship.names.en),
    customId: `chibi-${index}`,
  });

export const createShipButtons = (ships: Ship[]) =>
  new MessageActionRow({
    components: ships.map(createShipButton),
  });

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

export const emptyReply = (name: string): InteractionReplyOptions => ({
  content: `Nothing similar to ***${name}*** found!`,
});

export const shipReply = (ship: Ship): InteractionReplyOptions => {
  const shipname = ship.names.en;

  return {
    content: 'Choose a ship:',
    embeds: [createChibiEmbed(shipname)],
    components: [createSkinMenu(shipname)],
  };
};

export const shipsReply = (ships: Ship[]): InteractionReplyOptions => {
  const shipname = ships[0].names.en;

  const components = [];
  ships.length > 1 && components.push(createShipButtons(ships));
  components.push(createSkinMenu(shipname));

  return {
    content: 'Choose a ship:',
    embeds: [createChibiEmbed(shipname)],
    components,
  };
};
