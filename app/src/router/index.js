import { createRouter, createWebHistory } from 'vue-router';
import OrganizationList from '@/components/OrganizationList.vue';
import OrganizationForm from '@/components/OrganizationForm.vue';
import DepartmentList from "@/components/DepartmentList.vue";
import DepartmentForm from "@/components/DepartmentForm.vue";
import ProfessionForm from "@/components/ProfessionForm.vue";
import ProfessionList from "@/components/ProfessionList.vue";

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
    // Отделы
    {
        path: '/departments',
        name: 'Departments',
        component: DepartmentList,
    },
    {
        path: '/departments/new',
        name: 'CreateDepartment',
        component: DepartmentForm,
    },
    // Должности
    {
        path: '/professions',
        name: 'Professions',
        component: ProfessionList,
    },
    {
        path: '/professions/new',
        name: 'CreateProfessions',
        component: ProfessionForm,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
