import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, addItemsReducer, authReducer } from './reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addItems: addItemsReducer,
    auth: authReducer
  },
});
