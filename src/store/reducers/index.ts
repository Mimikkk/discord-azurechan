import { combineReducers } from '@reduxjs/toolkit';
import { reducer as Testing } from './testing';
import { reducer as Channels } from './channels';
import { reducer as Guilds } from './guilds';

export const rootReducer = combineReducers({
  Testing,
  Channels,
  Guilds,
});
