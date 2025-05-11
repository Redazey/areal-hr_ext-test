import { createRouter, createWebHistory } from 'vue-router';
import DepartmentForm from '@/components/DepartmentForm.vue';
import EmployeeForm from '@/components/EmployeeForm.vue';
import OperationsForm from '@/components/OperationsForm.vue';
import { useAppStore } from '@/store/index.js';
import { storeToRefs } from 'pinia';
import UniqueForm from '@/components/UniqueForm.vue';
import UserForm from '@/components/UserForm.vue';
import AuthForm from '@/components/AuthForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import { createListRouteConfig } from '@/router/routePropsFactory.js';

function getFormProps(fields, createFn, updateFn, backPath) {
  return () => {
    const appStore = useAppStore();
    const { isEdit } = storeToRefs(appStore);
    return {
      fields: fields.map((f) => ({
        label: f.charAt(0).toUpperCase() + f.slice(1),
        type: 'text',
        model: f,
        required: true,
      })),
      model: isEdit.value ? isEdit.value : Object.fromEntries(fields.map(f => [f, ''])),
      onSubmit: async (item) => {
        if (isEdit.value == null) {
          await appStore[createFn](item);
        } else {
          await appStore[updateFn](item);
        }
        router.push(backPath);
      },
    };
  };
}

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthForm,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationForm,
  },

  createListRouteConfig({
    name: 'Organizations',
    path: '/organizations',
    header: 'организаций',
    storeGetter: 'organizations',
    fetchAction: 'fetchOrganizations',
    formRoute: '/organizations/new',
    editRoute: '/organizations/new',
  }),
  {
    path: '/organizations/new',
    name: 'CreateOrganization',
    component: UniqueForm,
    props: getFormProps(['name', 'comment'], 'createOrganization', 'updateOrganization', '/organizations'),
  },

  createListRouteConfig({
    name: 'Departments',
    path: '/departments',
    header: 'отделов',
    storeGetter: 'departments',
    fetchAction: 'fetchDepartments',
    formRoute: '/departments/new',
    editRoute: '/departments/new',
  }),
  { path: '/departments/new', name: 'CreateDepartment', component: DepartmentForm },

  createListRouteConfig({
    name: 'Professions',
    path: '/professions',
    header: 'должностей',
    storeGetter: 'professions',
    fetchAction: 'fetchProfessions',
    formRoute: '/professions/new',
    editRoute: '/professions/new',
  }),
  {
    path: '/professions/new',
    name: 'CreateProfessions',
    component: UniqueForm,
    props: getFormProps(['name', 'comment'], 'createProfession', 'updateProfession', '/professions'),
  },

  createListRouteConfig({
    name: 'Files',
    path: '/files',
    header: 'файлов',
    storeGetter: 'files',
    fetchAction: 'fetchFiles',
    formRoute: '/files/new',
    allowEdit: false,
    allowDelete: true,
    allowAdd: true,
    customActions: [
      {
        label: 'Скачать',
        onClick: (item) => {
          const store = useAppStore();
          store.downloadFile(item.id, item.name);
        },
      },
    ],
  }),
  {
    path: '/files/new',
    name: 'UploadFiles',
    component: UniqueForm,
    props: () => ({
      fields: [
        {
          label: 'Файл',
          type: 'file',
          model: 'name',
          required: true,
          onChange: (e) => {
            const file = e.target.files[0];
            useAppStore().createFile(file);
          },
        },
      ],
      model: { filename: '' },
      onSubmit: () => router.push('/files'),
    }),
  },

  createListRouteConfig({
    name: 'Changes',
    path: '/changes',
    header: 'изменений',
    storeGetter: 'changes',
    fetchAction: 'fetchChanges',
    allowEdit: false,
    allowDelete: false,
    allowAdd: false,
    customEdit: () => alert('Недоступно для этой таблицы'),
    customAdd: () => alert('Недоступно'),
    customDelete: () => alert('Недоступно'),
  }),

  createListRouteConfig({
    name: 'Employees',
    path: '/employees',
    header: 'сотрудников',
    storeGetter: 'employees',
    fetchAction: 'fetchEmployees',
    formRoute: '/employees/new',
    editRoute: '/employees/new',
  }),
  {
    path: '/employees/new',
    name: 'CreateEmployees',
    component: EmployeeForm,
  },

  createListRouteConfig({
    name: 'Operations',
    path: '/operations',
    header: 'операций',
    storeGetter: 'operations',
    fetchAction: 'fetchOperations',
    formRoute: '/operations/new',
    editRoute: '/operations/new',
  }),
  {
    path: '/operations/new',
    name: 'CreateOperation',
    component: OperationsForm,
  },

  createListRouteConfig({
    name: 'Users',
    path: '/users',
    header: 'пользователей',
    storeGetter: 'users',
    fetchAction: 'fetchUsers',
    formRoute: '/users/new',
    editRoute: '/users/new',
  }),
  {
    path: '/users/new',
    name: 'CreateUser',
    component: UserForm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const appStore = useAppStore();
  await appStore.checkAuthenticated();
  const { user } = storeToRefs(appStore);
  console.log(user.value);
  if (user.value == null && to.path != '/auth' && to.path != '/registration') {
    router.push('/auth');
  }

  next();
});

export default router;
