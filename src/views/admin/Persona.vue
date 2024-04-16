<template>
    <div>
        <!-- comentario -->
        <h1>Componente Persona</h1>
        <form @submit.prevent="funGuardarPersona()">
            <label for="">Ingrese Nombres</label>
            <input type="text" v-model="persona.nombres">
            <br>
            <label for="">Ingrese apellidos</label>
            <input type="text" v-model="persona.apellidos">
            <br>
            <label for="">Ingrese direccion</label>
            <input type="text" v-model="persona.direccion">
            <br>
            <input type="submit">

        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>apellidos</th>
                    <th>direccion</th>
                    <th>USER ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="per in personas" :key="per.id">
                    <td>{{ per.id }}</td>
                    <td>{{ per.nombres }}</td>
                    <td>{{ per.apellidos }}</td>
                    <td>{{ per.direccion }}</td>
                    <td>{{ per.user_id }}</td>
                </tr>
            </tbody>

        </table>
        <pre>{{ personas }}</pre>
    </div>
</template>

<script setup>
    // mi comentario en js
    import personaService from "./../../services/persona.service.js"
    import {ref, onMounted} from 'vue'

    const personas = ref([])
    const persona = ref({
        "nombres": "",
        "apellidos": "",
        "direccion": "",
        "estado": 1,
        "user_id": 4
    })

    onMounted(() => {
        getPersonas()
    })

    async function getPersonas() {
        try {
            const res = await personaService.funListar()
            personas.value = res.data  
        } catch (error) {
            console.log(error)
        }

        // fetch("http://127.0.0.1:8000/api/persona")
        // .then(
        //     (res) => {
        //         return res.json()
        //         
        //     }
        // ).then(json => {
        //     personas.value = json
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    async function funGuardarPersona(){
        try {
            const res = await personaService.guardar(persona.value)
            getPersonas() 
        } catch (error) {
            console.log(error)
        }
    }

</script>

<style>
 /* mi comentario en css */

</style>