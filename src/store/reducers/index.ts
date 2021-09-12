import { combineReducers } from '@reduxjs/toolkit';
import { reducer as numbers } from './numbers';
// import { reducer as Channels } from './channels';
import { reducer as guilds } from './guilds';

export const rootReducer = combineReducers({
  numbers,
  guilds,
  // Channels,
});
