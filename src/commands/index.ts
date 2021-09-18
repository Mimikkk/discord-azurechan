import { OnInteractionHandlers as OnAzureInteractionHandlers } from './azure';
import { OnInteractionHandlerRecord } from 'shared/types/handlers';
import { CommandType } from './types';

export const OnInteractionHandlers: OnInteractionHandlerRecord<CommandType> = {
  ...OnAzureInteractionHandlers,
};
