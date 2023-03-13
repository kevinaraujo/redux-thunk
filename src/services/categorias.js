import instance from "common/config/api";

const categoriasService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');
        console.log('resposta', resposta)
        return resposta.data;
    }
}

export default categoriasService;