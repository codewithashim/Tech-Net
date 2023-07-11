import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  product: IProduct[];
}

const intialState: ICart = {
  product: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: intialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.product.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
