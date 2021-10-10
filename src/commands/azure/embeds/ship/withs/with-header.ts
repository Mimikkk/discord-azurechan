import { WithFn } from 'commands/azure/embeds/builder/types';
import { capitalize } from 'lodash';
import { createShipImage } from 'services/azure-service/images';

export const withHeader: WithFn = (builder) => {
  const { ship, skin, embed } = builder;
  const {
    wikiUrl,
    hullType,
    nationality,
    names: { en: name },
  } = ship;
  const {
    info: { obtainedFrom: description },
  } = skin;

  const { icon, chibi } = createShipImage(name);

  embed
    .setAuthor(`${hullType}-${nationality}`, chibi)
    .setThumbnail(icon)
    .setDescription(`Obtained from: ${description}`)
    .setTitle(capitalize(name))
    .setURL(wikiUrl);
  return builder;
};
