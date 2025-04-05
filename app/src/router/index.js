import { createRouter, createWebHistory } from 'vue-router';
import OrganizationList from '@/components/OrganizationList.vue';
import OrganizationForm from '@/components/OrganizationForm.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: OrganizationList,
    },
    {
        path: '/organizations',
        name: 'Organizations',
        component: OrganizationList,
    },
    {
        path: '/organizations/new',
        name: 'CreateOrganization',
        component: OrganizationForm,
    },
    {
        path: '/organizations/edit/:id',
        name: 'EditOrganization',
        component: OrganizationForm,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
