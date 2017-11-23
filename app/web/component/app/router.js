import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';
import DetailView from './detail';
// demo
// import demoTest from './demo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/app',
    routes: [
        {
            path: '/',
            components: {
                default: ListView,
                demo: () => import('./demo.vue')
                // demo: demoTest
            }
        },
        {
            path: '/list',
            component: ListView
        },
        {
            path: '/detail/:id',
            component: DetailView
        }
    ]
});

export default router;
