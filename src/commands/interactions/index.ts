import { CommandType } from 'commands/types';
import { CommandInteraction } from 'discord.js';
import {
  handleAzureChibi,
  handleAzureEvent,
  handleAzureGirl,
  handleAzureItem,
} from './handlers';

export const Handlers: Record<
  CommandType,
  (interaction: CommandInteraction) => void
> = {
  [CommandType.AzureChibi]: handleAzureChibi,
  [CommandType.AzureEvent]: handleAzureEvent,
  [CommandType.AzureGirl]: handleAzureGirl,
  [CommandType.AzureItem]: handleAzureItem,
};
