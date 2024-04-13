<template>
    <div>
        <!-- comentario -->
        <h1>Componente Categoria</h1>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import categoriaService from "./../../services/categoria.service"
    // mi comentario en js
    onMounted(() => {
        getListaCategorias()
        
    });

    async function getListaCategorias(){
        // FETCH
        // categoriaService.funListar()
        //                 .then(res => res.json())
        //                 .then(json => console.log(json));
        
        // AXIOS
        const res = await categoriaService.funListar();
        console.log(res.data)
        
    }

</script>

<style>
 /* mi comentario en css */

</style>