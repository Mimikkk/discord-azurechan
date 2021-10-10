import { MessageActionRow, MessageButton } from 'discord.js';
import { capitalize } from 'lodash';
import { Ship } from 'services/azure-service';

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
