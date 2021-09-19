import { pipe } from 'lodash/fp';
import { Ship, Skin } from 'services/azure-service';
import { BuilderFn, BuildFn, WithFn } from './types';
import { MessageEmbed } from 'discord.js';

export const asBuilder: BuilderFn = (ship, skin) => () => ({
  ship,
  skin,
  embed: new MessageEmbed(),
});

export const build: BuildFn = ({ embed }) => embed;

export const construct = (ship: Ship, skin: Skin, ...withs: WithFn[]) =>
  pipe(asBuilder(ship, skin), ...withs, build)();
