import { createRouter, createWebHistory } from 'vue-router';

import index from '../views/Index.vue';
import layout from '../layout/Main.vue';

const routes = [
    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [
            {
                path: '',
                name: 'View-Index',
                component: index
            },

            {
                path: '/crud',
                name: 'View-crud',
                component: () => import(/* webpackChunkName: "about" */ '../views/CrudView.vue')
            }
        ]
    }
];
// enrutador --> app.vue
const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

export default router;
