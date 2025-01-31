import { createSlice } from '@reduxjs/toolkit';

// Counter Slice
const initialCounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if(state.value > 1) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Add Items Slice
const initialItemsState = [];

export const AddItems = createSlice({
  name: 'ADD_ITEMS',
  initialState: initialItemsState,
  reducers: {
    addItem: (state, action) => {
      state.push({        
        name: action.payload.name, 
        title: action.payload.title,
        price: action.payload.price
      });
    },
  },
});

// Exporting action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addItem } = AddItems.actions;

// Exporting reducers
export const counterReducer = counterSlice.reducer;
export const addItemsReducer = AddItems.reducer;
