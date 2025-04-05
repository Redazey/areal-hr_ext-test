import { createRouter, createWebHistory } from 'vue-router';
import OrganizationList from '@/components/OrganizationList.vue';
import OrganizationForm from '@/components/OrganizationForm.vue';
import DepartmentList from "@/components/DepartmentList.vue";
import DepartmentForm from "@/components/DepartmentForm.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: OrganizationList,
    },
    // Организации
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
    // Отделы
    {
        path: '/departments',
        name: 'Departments',
        component: DepartmentList,
    },
    {
        path: '/departments/new',
        name: 'CreateOrganization',
        component: DepartmentForm,
    },
    {
        path: '/departments/edit/:id',
        name: 'EditDepartment',
        component: DepartmentForm,
        props: true,
    },
    // Должности
    /*
    {
        path: '/professions',
        name: 'Professions',
        component: ProfessionsList,
    },
    {
        path: '/professions/new',
        name: 'CreateProfessions',
        component: ProfessionsForm,
    },
    {
        path: '/professions/edit/:id',
        name: 'EditProfessions',
        component: ProfessionsForm,
        props: true,
    },

     */
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
