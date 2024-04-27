import { Api } from "./api.service";

export default {
    funListar: function(page=1, limit=10, q=''){
        return Api().get(`/producto?page=${page}&limit=${limit}&q=${q}`);
    },
    guardar: function(datos){
        return Api().post('/producto', datos);
    },
    mostrar: function(id){
        return Api().get(`/producto/${id}`);
    },
    modificar: function(id, datos){
        return Api().put(`/producto/${id}`, datos);
    },
    eliminar: function(id){
        return Api().delete(`/producto/${id}`);
    }
}