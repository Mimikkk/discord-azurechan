import {
  ButtonInteraction,
  CommandInteraction,
  SelectMenuInteraction,
} from 'discord.js';
import { AsyncFn } from 'shared/types/functions';

export type OnceReadyFn = AsyncFn;
export type OnReadyFn = AsyncFn;
export type OnceErrorFn = AsyncFn<Error>;
export type OnInteractionFn = AsyncFn<CommandInteraction>;
export type OnButtonFn = AsyncFn<ButtonInteraction>;
export type OnSelectFn = AsyncFn<SelectMenuInteraction>;
