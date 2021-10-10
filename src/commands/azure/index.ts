import { handleChibi, handleChibiButtons, handleChibiSelects } from './chibi';
import { handleEvent } from './event';
import { handleGirl } from './girl';
import { handleItem } from './item';
import {
  OnButtonHandlerRecord,
  OnInteractionHandlerRecord,
  OnSelectHandlerRecord,
} from 'shared/types/handlers';

export type AzureCommandType = 'chibi' | 'event' | 'girl' | 'item';

export const OnInteractionHandlers: OnInteractionHandlerRecord<AzureCommandType> =
  {
    event: handleEvent,
    chibi: handleChibi,
    girl: handleGirl,
    item: handleItem,
  };

export const OnButtonHandlers: OnButtonHandlerRecord<AzureCommandType> = {
  chibi: handleChibiButtons,
};

export const OnSelectHandlers: OnSelectHandlerRecord<AzureCommandType> = {
  chibi: handleChibiSelects,
};
