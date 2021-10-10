import { OnInteractionFn, OnButtonFn, OnSelectFn } from './listeners';
import { AsyncFn } from './functions';

export type Handler<Key extends string, Handle extends AsyncFn> = Record<
  Key,
  Handle
>;

export type OnInteractionHandlerRecord<Key extends string> = Handler<
  Key,
  OnInteractionFn
>;

export type OnButtonHandlerRecord<Key extends string> = Partial<
  Handler<Key, OnButtonFn>
>;

export type OnSelectHandlerRecord<Key extends string> = Partial<
  Handler<Key, OnSelectFn>
>;
