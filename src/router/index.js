import { createRouter, createWebHistory } from 'vue-router'
import Categoria from './../views/admin/Categoria.vue'
import Persona from './../views/admin/Persona.vue'
import Role from './../views/admin/Role.vue'
import Mensaje from '../views/admin/Mensaje.vue';
import Login from '../views/auth/Login.vue';
import AppLayout from '../layout/AppLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            component: AppLayout,
            children: [
                {
                    path: 'categoria',
                    name: 'Categoria',
                    component: Categoria,
                    meta: {requiredAuth: true}
                },
                {
                    path: 'persona',
                    name: 'Persona',
                    component: Persona,
                    meta: {requiredAuth: true}
                },
                {
                    path: 'role',
                    name: 'Role',
                    component: Role,
                    meta: {requiredAuth: true}
                },
                {
                    path: 'whatsapp',
                    name: 'Whatsapp',
                    component: Mensaje
                }

            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {redirectIfAuth: true}
        },
      
    ]

});

router.beforeEach((to, from, next) => {
    console.log("FROM: ", from);
    console.log("TO: ", to);
    let token = null;
    try {
        let base64 = localStorage.getItem("access_token") || null
        if(base64){
            token = atob(base64);
        }
        
    } catch (error) {
        localStorage.removeItem('access_token');
        token = null
    }

    if(to.meta.requiredAuth){
        if(!token){
            return next({name: 'Login'})
        }
        return next()
    }

    if(to.meta.redirectIfAuth && token){
        return next({name: 'Persona'});
    }


    return next()
})


export default router;
