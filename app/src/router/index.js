import { createRouter, createWebHistory } from 'vue-router';
import OrganizationList from '@/components/OrganizationList.vue';
import OrganizationForm from '@/components/OrganizationForm.vue';
import DepartmentForm from "@/components/DepartmentForm.vue";
import ProfessionForm from "@/components/ProfessionForm.vue";
import FileForm from "@/components/FileForm.vue";
import EmployeeForm from "@/components/EmployeeForm.vue";
import OperationsForm from "@/components/OperationsForm.vue";
import UniqueList from "@/components/UniqueList.vue";
import {useAppStore} from "@/store/index.js";
import {storeToRefs} from "pinia";

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
        component: UniqueList,
        props: route => {
            const appStore = useAppStore();
            const {organizations} = storeToRefs(appStore);
            return {
                header: "организаций",
                rawData: organizations,
                editAction: (item) => {
                    appStore.setEditing(item)
                    router.push(`/organizations/new`)
                },
                addAction: () => {
                    router.push(`/organizations/new`)
                },
                deleteAction: (id) => {
                    appStore.deleteOrganization(id)
                },
            }
        },
        beforeEnter: async (to, from, next) => {
            const appStore = useAppStore();
            await appStore.fetchOrganizations();

            next()
        }
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
        component: UniqueList,
        props: route => {
            const appStore = useAppStore();
            const {departments} = storeToRefs(appStore);
            return {
                header: "отделов",
                rawData: departments,
                editAction: (item) => {
                    appStore.setEditing(item)
                    router.push(`/departments/new`)
                },
                addAction: () => {
                    router.push(`/departments/new`)
                },
                deleteAction: (id) => {
                    appStore.deleteDepartment(id)
                },
            }
        },
        beforeEnter: async (to, from, next) => {
            const appStore = useAppStore();
            await appStore.fetchOrganizations();

            next()
        }
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
        component: UniqueList,
        props: route => {
            const appStore = useAppStore();
            const {professions} = storeToRefs(appStore);
            return {
                header: "должностей",
                rawData: professions,
                editAction: (item) => {
                    appStore.setEditing(item)
                    router.push(`/professions/new`)
                },
                addAction: () => {
                    router.push(`/professions/new`)
                },
                deleteAction: (id) => {
                    appStore.deleteProfession(id)
                },
            }
        },
        beforeEnter: async (to, from, next) => {
            const appStore = useAppStore();
            await appStore.fetchOrganizations();

            next()
        }
    },
    {
        path: '/professions/new',
        name: 'CreateProfessions',
        component: ProfessionForm,
    },
    // Файлы
    {
        path: '/files',
        name: 'Files',
        component: FileForm,
    },
    // Сотрудники
    {
        path: '/employees',
        name: 'Employees',
        component: UniqueList,
        props: route => {
            const appStore = useAppStore();
            const {employees} = storeToRefs(appStore);
            return {
                header: "сотрудников",
                rawData: employees,
                editAction: (item) => {
                    appStore.setEditing(item)
                    router.push(`/employees/new`)
                },
                addAction: () => {
                    router.push(`/employees/new`)
                },
                deleteAction: (id) => {
                    appStore.deleteEmployee(id)
                },
            }
        },
        beforeEnter: async (to, from, next) => {
            const appStore = useAppStore();
            await appStore.fetchEmployees();

            next()
        }
    },
    {
        path: '/employees/new',
        name: 'CreateEmployees',
        component: EmployeeForm,
    },
    // Кадровые операции
    {
        path: '/operations',
        name: 'Operations',
        component: UniqueList,
        props: route => {
            const appStore = useAppStore();
            const {operations} = storeToRefs(appStore);
            return {
                header: "организаций",
                rawData: operations,
                editAction: (item) => {
                    appStore.setEditing(item)
                    router.push(`/operations/new`)
                },
                addAction: () => {
                    router.push(`/operations/new`)
                },
                deleteAction: (id) => {
                    appStore.deleteOperation(id)
                },
            }
        },
        beforeEnter: async (to, from, next) => {
            const appStore = useAppStore();
            await appStore.fetchOperations();

            next()
        }
    },
    {
        path: '/operation/new',
        name: 'CreateOperation',
        component: OperationsForm,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach = async (to, from, next) => {
    next();
}

export default router;
