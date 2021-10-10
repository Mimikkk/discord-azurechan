import { ShipImage, ShipImageType } from 'services/azure-service/types';

const WikiUrl = 'https://azurlane.koumakan.jp';
const getImage = (image: string) =>
  encodeURI(`${WikiUrl}/Special:Redirect/file/${image}.png`);

export const createShipImage = (name: string, isKai?: boolean): ShipImage => {
  const kaiInfix = isKai ? 'Kai' : '';

  const shipImageUrl = (type: ShipImageType) =>
    getImage(`${name}${kaiInfix}${type}`);

  return {
    chibi: shipImageUrl(ShipImageType.Chibi),
    banner: shipImageUrl(ShipImageType.Banner),
    icon: shipImageUrl(ShipImageType.Icon),
    base: shipImageUrl(ShipImageType.Base),
    shipyardIcon: shipImageUrl(ShipImageType.ShipyardIcon),
  };
};
