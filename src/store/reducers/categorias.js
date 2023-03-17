import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';
import busca from './busca';

const { toast } = createStandaloneToast();
const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    console.log('builder', builder)
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (state, { payload }) => {
        toast({
          title: 'Success',
          description: 'Categorias loaded!',
          status: 'success',
          duration: 2000,
          isClosable: true
        })
      
        return payload
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, { payload }) => {
        toast({
          description: 'Loading itens...',
          status: 'loading',
          duration: 2000,
          isClosable: true
        });
       }
    )
    .addCase(
      buscarCategorias.rejected,
      (state, { payload }) => {
        toast({
          title: 'Error',
          description: 'Error on loading categorias',
          status: 'error',
          duration: 2000,
          isClosable: true
        })
      }
    )
    
  }
});

export default categoriasSlice.reducer;