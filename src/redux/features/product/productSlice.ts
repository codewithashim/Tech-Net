import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
    reset: (state) => {
      state.status = false;
      state.priceRange = 150;
    },
  },
});

export const { toggleStatus, setPriceRange, reset } = productSlice.actions;

export default productSlice.reducer;
