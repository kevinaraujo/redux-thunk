import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategorias: (state, { payload }) => {
        state.push(...payload)
    }
  }
});


export const { addCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;