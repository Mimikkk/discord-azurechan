import { service } from './service';

let ship = service.ships.raw[0];
let skin = ship.skins[0];

export type Ship = typeof ship;
export type Skin = typeof skin;
