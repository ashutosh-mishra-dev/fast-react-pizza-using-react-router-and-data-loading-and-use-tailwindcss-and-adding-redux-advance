import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 1,
  //     name: "abc",
  //     unitPrice: 30,
  //     quantity: 1,
  //     totalPrice: 240,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++; // yha pr ham redux-toollit ka use kar rhe h es liye ham mutate data pass kar pa rhe h baki react me ham es prkar se data pass nhi karte
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseeItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--; // react me ham es prkar se data pass nhi karte
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseeItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// yha hamene ye method banaya h some calculation perform ke liye jo abhi tak cart me useSelector() me use ho rha h

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
