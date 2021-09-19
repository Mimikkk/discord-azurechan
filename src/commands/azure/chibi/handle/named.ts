import { ShipFuse } from 'commands/azure/chibi/types';
import { createShipButtons } from 'commands/azure/chibi/utils';
import { CommandInteraction, InteractionReplyOptions } from 'discord.js';
import { azureService } from 'services';
import { Ship } from 'services/azure-service';

const replyShips = (ships: Ship[]): InteractionReplyOptions => ({
  content: 'Choose a ship:',
  components: [createShipButtons(ships)],
});

const replyEmpty = (name: string): InteractionReplyOptions => ({
  content: `Nothing similar to ${name} found!`,
});

const asShips = (fuses: ShipFuse[]) =>
  fuses.slice(0, Math.min(fuses.length, 4)).map((fuse) => fuse.item);

export const handleNamed = async (interaction: CommandInteraction) => {
  const name = interaction.options.getString('name');
  const fuses = azureService.ships.fuse.search(name);

  await interaction.reply(
    fuses.length ? replyShips(asShips(fuses)) : replyEmpty(name),
  );
};
