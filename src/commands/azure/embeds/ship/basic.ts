import { withColor, withFooter, withHeader, construct } from './builder';
import { Ship, Skin } from 'services/azure-service';

export const basic = (ship: Ship, skin: Skin) =>
  construct(ship, skin, withHeader, withFooter, withColor);
