import { MessageEmbed } from 'discord.js';
import { Ship, Skin } from 'services/azure-service';

interface EmbedBuilder {
  ship: Ship;
  skin: Skin;
  embed: MessageEmbed;
}

export type BuilderFn = (ship: Ship, skin: Skin) => () => EmbedBuilder;
export type WithFn = (builder: EmbedBuilder) => EmbedBuilder;
export type BuildFn = (builder: EmbedBuilder) => MessageEmbed;
