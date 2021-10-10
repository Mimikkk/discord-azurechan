import {
  OnInteractionHandlers as OnAzureInteractionHandlers,
  OnButtonHandlers as OnAzureButtonHandlers,
  OnSelectHandlers as OnAzureSelectHandlers,
} from './azure';
import {
  OnInteractionHandlerRecord,
  OnButtonHandlerRecord,
  OnSelectHandlerRecord,
} from 'shared/types/handlers';
import { InteractionType } from './types';

export const InteractionHandlers: OnInteractionHandlerRecord<InteractionType> =
  {
    ...OnAzureInteractionHandlers,
  };

export const ButtonHandlers: OnButtonHandlerRecord<InteractionType> = {
  ...OnAzureButtonHandlers,
};
export const SelectHandlers: OnSelectHandlerRecord<InteractionType> = {
  ...OnAzureSelectHandlers,
};
