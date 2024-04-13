import { createRouter, createWebHistory } from 'vue-router'
import Categoria from './../views/admin/Categoria.vue'
import Persona from './../views/admin/Persona.vue'
import Role from './../views/admin/Role.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/categoria',
            name: 'Categoria',
            component: Categoria
        },
        {
            path: '/persona',
            name: 'Persona',
            component: Persona
        },
        {
            path: '/role',
            name: 'Role',
            component: Role
        }
    ]

});

export default router;
