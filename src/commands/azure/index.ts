import { handleChibi } from './chibi';
import { handleEvent } from './event';
import { handleGirl } from './girl';
import { handleItem } from './item';
import { OnInteractionHandlerMap } from 'shared/types/handlers';

export type AzureCommandType =
  | 'AzureChibi'
  | 'AzureEvent'
  | 'AzureGirl'
  | 'AzureItem';

export const OnInteractionHandlers: {} = {
  AzureEvent: handleEvent,
  AzureChibi: handleChibi,
  AzureGirl: handleGirl,
  AzureItem: handleItem,
};
