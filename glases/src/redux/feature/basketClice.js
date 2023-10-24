import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incrementBasket: (state, action) => {
      state.products.map((el) => {
        if (el.name == action.payload) {
          return { ...el, amount: (el.amount ++) }
        }
        else
        {
          return el
        }
      });
    },
    decrementBasket: (state, action) => {
      state.products.map((el) => {
        if (el.name == action.payload) {
          return { ...el, amount: (el.amount --) }
        }
        else
        {
          return el
        }
      });
    },
     removeBasket: (state, { payload}) => {
       state.products =  state.products.filter ((item) => {
            return item.name !== payload
        })
     },
     
  },
});



export const { incrementBasket, decrementBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
