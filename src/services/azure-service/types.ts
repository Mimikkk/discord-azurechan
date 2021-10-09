import { service } from './service';

let ship = service.ships.raw[0];
let skin = ship.skins[0];

export type Ship = typeof ship;
export type Skin = typeof skin;

export enum ShipImageType {
  Base = '',
  ShipyardIcon = 'ShipyardIcon',
  Icon = 'Icon',
  Chibi = 'Chibi',
  Banner = 'Banner',
}

export interface ShipImage {
  base: string;
  shipyardIcon: string;
  icon: string;
  chibi: string;
  banner: string;
}
