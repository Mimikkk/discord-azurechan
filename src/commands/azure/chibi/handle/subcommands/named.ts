import { ShipFuse } from 'commands/azure/chibi/types';
import { emptyReply, shipsReply } from 'commands/azure/chibi/utils';
import { CommandInteraction } from 'discord.js';
import { azureService } from 'services';

const asShips = (fuses: ShipFuse[]) =>
  fuses.slice(0, Math.min(fuses.length, 4)).map((fuse) => fuse.item);

export const handleNamed = async (interaction: CommandInteraction) => {
  const name = interaction.options.getString('name');
  const fuses = azureService.ships.fuse.search(name);

  await interaction.reply(
    fuses.length ? shipsReply(asShips(fuses)) : emptyReply(name),
  );
};
