import { construct, withColor } from 'commands/azure/embeds/builder';
import { withFooter, withHeader } from './withs';
import { Ship, Skin } from 'services/azure-service';

export const basic = (ship: Ship, skin: Skin) =>
  construct(ship, skin, withHeader, withFooter, withColor);
