import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategorias: (state, action) => {
        console.log(action)
        state.push(...action.payload)
    }
  }
});


export const { addCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;