import { handleChibi } from './chibi';
import { handleEvent } from './event';
import { handleGirl } from './girl';
import { handleItem } from './item';
import { OnInteractionHandlerRecord } from 'shared/types/handlers';

export type AzureCommandType = 'chibi' | 'event' | 'girl' | 'item';

export const OnInteractionHandlers: OnInteractionHandlerRecord<AzureCommandType> =
  {
    event: handleEvent,
    chibi: handleChibi,
    girl: handleGirl,
    item: handleItem,
  };
