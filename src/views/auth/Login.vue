<template>
    <h1>Login</h1>

    <label for="">Ingrese Correo</label>
    <input type="text" v-model="credenciales.email">
    <br>
    <label for="">Ingrese Contraseña</label>
    <input type="password" v-model="credenciales.password">
    <br>
    <button @click="funLogin()">Ingresar</button>
</template>

<script setup>

import authService from "./../../services/auth.service.js"
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const credenciales = ref({email: "", password: ""});


const funLogin = async () => {
    try {
        const {data} = await authService.funLogin(credenciales.value);

        console.log(data);
        localStorage.setItem("access_token", btoa(data.access_token))

        router.push({name: "Categoria"});
        
    } catch (error) {
        console.log(error);
    }
    
}

</script>