import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategorias: (state, action) => {
        console.log(action)
        state.push(...action.payload)
    }
  },
  extraReducers: builder => {
    console.log('builder', builder)
    builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
      
    console.log('payload', payload)
      state.push(...payload)
    })
  }
});


export const { addCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;