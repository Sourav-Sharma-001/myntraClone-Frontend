import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, addItemsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addItems: addItemsReducer,
  },
});
