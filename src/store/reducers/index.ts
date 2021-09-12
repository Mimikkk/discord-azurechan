import { combineReducers } from '@reduxjs/toolkit';
import { reducer as Numbers } from './numbers';
// import { reducer as Channels } from './channels';
// import { reducer as Guilds } from './guilds';

export const rootReducer = combineReducers({
  Numbers,
  // Channels,
  // Guilds,
});
