import { MessageEmbed } from 'discord.js';
import { capitalize } from 'lodash';
import { azureService } from 'services';

export const createEmbed = (ship: string, skin?: number) => {
  const { names, skins } = azureService.ships.get(ship);
  const skinUrl = skins[skin ?? 0].chibi;

  return new MessageEmbed({
    description: `${capitalize(names.en)}`,
  }).setImage(skinUrl);
};
