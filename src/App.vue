<template>

<router-link :to="{ name: 'Categoria'}">
  Categoria
</router-link> |
<router-link :to="{ name: 'Persona'}">
  Persona
</router-link> |

<router-link :to="{ name: 'Role'}">
  Role
</router-link>

  <router-view></router-view>
</template>