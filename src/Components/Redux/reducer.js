import { createSlice } from '@reduxjs/toolkit';

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
      if (state.value > 1) {
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
      const updatedState = [
        ...state,
        {
          id: action.payload.id,
          img: action.payload.img,
          name: action.payload.name,
          title: action.payload.title,
          price: action.payload.price,
          qty: action.payload.qty,
          size: action.payload.size,
          discount: action.payload.discount,
        },
      ];
      localStorage.setItem("items", JSON.stringify(updatedState));
      return updatedState;
    },
    updateQty: (state, action) => {
      const updatedState = state.map((s) =>
        s.id === action.payload.id ? { ...s, qty: s.qty + action.payload.qty } : s
      );
      localStorage.setItem("items", JSON.stringify(updatedState));
      return updatedState;
    },
    updateSize: (state, action) => {
      const updatedState = state.map((s) =>
        s.id === action.payload.id ? { ...s, size: action.payload.size } : s
      );
      localStorage.setItem("items", JSON.stringify(updatedState));
      return updatedState;
    },
    removeItem: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("items", JSON.stringify(updatedState));
      return updatedState;
    },
    clear: () => {
      localStorage.removeItem("items");
      return [];
    },
    setItems: (state, action) => {
      localStorage.setItem("items", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

const initialAuthState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addItem, updateQty, updateSize, removeItem, clear, setItems } = AddItems.actions;
export const { loginSuccess, logout } = authSlice.actions;

export const counterReducer = counterSlice.reducer;
export const addItemsReducer = AddItems.reducer;
export const authReducer = authSlice.reducer;
