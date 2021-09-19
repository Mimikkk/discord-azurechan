import { randomInt } from 'crypto';
import { service } from './service';

export const randomShip = () =>
  service.ships.raw[randomInt(0, service.ships.raw.length)];
