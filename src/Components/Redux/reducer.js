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
        id: action.payload.id,
        img: action.payload.img,      
        name: action.payload.name, 
        title: action.payload.title,
        price: action.payload.price,
        qty: action.payload.qty,
        size: action.payload.size,
        discount: action.payload.discount
      });
    },
    updateQty: (state, action) => {
      state.forEach((s) => {
        if(action.payload.id === s.id) {
          s.qty += action.payload.qty;
        }
      })
    },
    updateSize: (state, action) => {
      state.forEach((s) => {
        if(action.payload.id === s.id) {
          s.size = action.payload.size;
        }
      })
    }
  },
});

// Exporting action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addItem, updateQty, updateSize } = AddItems.actions;

// Exporting reducers
export const counterReducer = counterSlice.reducer;
export const addItemsReducer = AddItems.reducer;
