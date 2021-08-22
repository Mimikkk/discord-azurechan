import { OnInteractionHandlers as OnAzureInteractionHandlers } from './azure';
import { OnInteractionHandlerMap } from 'shared/types/handlers';
import { CommandType } from './types';

export const OnInteractionHandlers: {} = {
  ...OnAzureInteractionHandlers,
};
