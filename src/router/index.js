import { createRouter, createWebHistory } from 'vue-router';

import Main from '../views/Main.vue';

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Main
    },
   
    {
    path: '/crud',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrudView.vue')
  },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

export default router;
