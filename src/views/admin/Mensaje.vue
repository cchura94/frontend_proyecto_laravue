<template>
  <h1>envío de mensajes whatsapp</h1>
  <input type="text" v-model="mensaje" />
  <button @click="enviarMensajeTexto()">Enviar Mensaje</button>
</template>
<script setup>

import { ref } from "vue";
import mensajeService from "./../../services/mensaje.service";
const mensaje = ref("");

function enviarMensajeWhatsapp() {
  mensajeService.enviarMensaje({
    messaging_product: "whatsapp",
    to: "59173277937",
    type: "template",
    template: {
      name: "hello_world",
      language: { code: "en_US" },
    },
  });
}

async function enviarMensajeTexto(){
    mensajeService.enviarMensajeTexto(mensaje.value)
}
</script>
