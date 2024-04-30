<template>
    <div class="card">
        <!-- comentario -->
        <h1>Componente Categoria</h1>

        <DataTable :value="categorias" tableStyle="min-width: 50rem">
            <Column field="id" header="ID"></Column>
            <Column field="nombre" header="NOMBRE"></Column>
            <Column field="detalle" header="DETALLE"></Column>  
        </DataTable>


    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import categoriaService from "./../../services/categoria.service"

const categorias = ref([]);
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
        categorias.value = res.data
        
    }

</script>

<style>
 /* mi comentario en css */

</style>