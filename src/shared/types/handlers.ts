import { OnInteractionFn } from './listeners';
import { AsyncFn } from './functions';

export type Handler<Key extends string, Handle extends AsyncFn> = Record<
  Key,
  Handle
>;

export type OnInteractionHandlerRecord<Key extends string> = Handler<
  Key,
  OnInteractionFn
>;
