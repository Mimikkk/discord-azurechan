import { ShipFuse } from 'commands/azure/chibi/types';
import { createShipButtons } from 'commands/azure/chibi/utils';
import { createChibiEmbed } from 'commands/azure/embeds';
import { createSkinMenu } from 'config/listeners/on-interaction';
import { CommandInteraction, InteractionReplyOptions } from 'discord.js';
import { azureService } from 'services';
import { Ship } from 'services/azure-service';

export const replyShips = (ships: Ship[]): InteractionReplyOptions => {
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
