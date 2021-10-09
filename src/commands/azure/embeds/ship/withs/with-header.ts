import { WithFn } from 'commands/azure/embeds/builder/types';
import { capitalize } from 'lodash';

export const withHeader: WithFn = (builder) => {
  const { ship, skin, embed } = builder;
  const {
    wikiUrl,
    hullType,
    nationality,
    names: { en: title },
  } = ship;
  const {
    chibi,
    info: { obtainedFrom: description },
  } = skin;

  embed
    .setAuthor(`${hullType}-${nationality}`, chibi)
    .setThumbnail(chibi)
    .setDescription(`Obtained from: ${description}`)
    .setTitle(capitalize(title))
    .setURL(wikiUrl);
  return builder;
};
