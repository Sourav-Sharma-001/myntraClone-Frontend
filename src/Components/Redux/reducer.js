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


const initialItemsState = JSON.parse(localStorage.getItem("items")) || []; 

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
      localStorage.setItem("items", JSON.stringify(state)); 
    },
    updateQty: (state, action) => {
      state.forEach((s) => {
        if(action.payload.id === s.id) {
          s.qty += action.payload.qty;
        }
      });
      localStorage.setItem("items", JSON.stringify(state)); 
    },
    updateSize: (state, action) => {
      state.forEach((s) => {
        if(action.payload.id === s.id) {
          s.size = action.payload.size;
        }
      });
      localStorage.setItem("items", JSON.stringify(state)); 
    },
    removeItem: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload.id); 
      localStorage.setItem("items", JSON.stringify(updatedState));
      return updatedState;
    },    
    setItems: (state, action) => {
      return action.payload;  
    }
  },
});

// Exporting action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addItem, updateQty, updateSize, removeItem } = AddItems.actions;

// Exporting reducers
export const counterReducer = counterSlice.reducer;
export const addItemsReducer = AddItems.reducer;
