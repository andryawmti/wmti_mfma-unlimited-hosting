import { createRouter, createWebHistory } from "vue-router";

import Index from '@/pages/Index.vue';
import Detail from '@/pages/Detail.vue';
import FeatureRequest from '@/pages/FeatureRequest.vue'

const routes = [
    {
        path: '',
        name: 'Index',
        component: Index
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/feature-request',
        name: 'FeatureRequest',
        component: FeatureRequest
    }
]

const router = createRouter({
    history: createWebHistory('/unlimited-hosting'),
    routes
})

export default router