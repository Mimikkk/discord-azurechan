import { basic } from './basic';
import { azureService } from 'services';

export const createChibiEmbed = (name: string, skinId?: number) => {
  const ship = azureService.ships.get(name);
  const skin = ship.skins[skinId ?? 0];

  return basic(ship, skin).setImage(skin.chibi);
};
