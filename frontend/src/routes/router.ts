import { createRouter, createWebHashHistory } from "vue-router";
import ContractsPage from '../view/ContracntsPage.vue';


const routes = [
    { path: '/contracts', alias: '/', name: 'contracts', component: ContractsPage, meta: { title: 'Контракты' } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach( (to, from , next): void => {
    document.title = to.meta.title as string;
    next();
})

export default router;