import { Api } from "./api.service";

export default {
    funLogin: function(credenciales){
        return Api().post('/v1/auth/login', credenciales);
    },

    funRegister: function(datos){
        return Api().post('/v1/auth/register', datos);
    },

    funProfile: function(){
        return Api().get('/v1/auth/profile');
    },

    funLogout: function(){
        return Api().post('/v1/auth/logout', {});
    }
}