import { createRouter, createWebHistory } from 'vue-router';
import DepartmentForm from '@/components/DepartmentForm.vue';
import EmployeeForm from '@/components/EmployeeForm.vue';
import OperationsForm from '@/components/OperationsForm.vue';
import UniqueList from '@/components/UniqueList.vue';
import { useAppStore } from '@/store/index.js';
import { storeToRefs } from 'pinia';
import UniqueForm from '@/components/UniqueForm.vue';
import UserForm from '@/components/UserForm.vue';
import AuthForm from '@/components/AuthForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { organizations } = storeToRefs(appStore);
      return {
        header: 'организаций',
        rawData: organizations,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/organizations/new`);
        },
        addAction: () => {
          router.push(`/organizations/new`);
        },
        deleteAction: (id) => {
          appStore.deleteOrganization(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchOrganizations();

      next();
    },
  },
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
  // Организации
  {
    path: '/organizations',
    name: 'Organizations',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { organizations } = storeToRefs(appStore);
      return {
        header: 'организаций',
        rawData: organizations,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/organizations/new`);
        },
        addAction: () => {
          appStore.stopEditing();
          router.push(`/organizations/new`);
        },
        deleteAction: (id) => {
          appStore.deleteOrganization(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchOrganizations();

      next();
    },
  },
  {
    path: '/organizations/new',
    name: 'CreateOrganization',
    component: UniqueForm,
    props: (route) => {
      const appStore = useAppStore();
      const { isEdit } = storeToRefs(appStore);
      return {
        fields: [
          {
            label: 'Название',
            type: 'text',
            model: 'name',
            required: true,
          },
          {
            label: 'Комментарий',
            type: 'text',
            model: 'comment',
            required: false,
          },
        ],
        model: isEdit.value ? isEdit.value : { name: '', comment: '' },
        onSubmit: async (item) => {
          if (isEdit.value == null) {
            await appStore.createOrganization(item);
            router.push(`/organizations`);
          } else {
            await appStore.updateOrganization(item);
            router.push(`/organizations`);
          }
        },
      };
    },
  },
  // Отделы
  {
    path: '/departments',
    name: 'Departments',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { departments } = storeToRefs(appStore);
      return {
        header: 'отделов',
        rawData: departments,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/departments/new`);
        },
        addAction: () => {
          appStore.stopEditing();
          router.push(`/departments/new`);
        },
        deleteAction: (id) => {
          appStore.deleteDepartment(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchDepartments();

      next();
    },
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
    props: (route) => {
      const appStore = useAppStore();
      const { professions } = storeToRefs(appStore);
      return {
        header: 'должностей',
        rawData: professions,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/professions/new`);
        },
        addAction: () => {
          router.push(`/professions/new`);
        },
        deleteAction: (id) => {
          appStore.deleteProfession(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchProfessions();

      next();
    },
  },
  {
    path: '/professions/new',
    name: 'CreateProfessions',
    component: UniqueForm,
    props: (route) => {
      const appStore = useAppStore();
      const { isEdit } = storeToRefs(appStore);
      return {
        fields: [
          {
            label: 'Название',
            type: 'text',
            model: 'name',
            required: true,
          },
          {
            label: 'Комментарий',
            type: 'text',
            model: 'comment',
            required: false,
          },
        ],
        model: isEdit.value ? isEdit.value : { name: '', comment: '' },
        onSubmit: async (item) => {
          if (isEdit.value == null) {
            await appStore.createProfession(item);
            router.push(`/professions`);
          } else {
            await appStore.updateProfession(item);
            router.push(`/professions`);
          }
        },
      };
    },
  },
  // Файлы
  {
    path: '/files',
    name: 'Files',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { files } = storeToRefs(appStore);
      return {
        header: 'файлов',
        rawData: files,
        editAction: (item) => {
          appStore.downloadFile(item.id, item.filename);
        },
        addAction: () => {
          router.push(`/files/new`);
        },
        deleteAction: (id) => {
          appStore.deleteFile(id);
        },
      };
    },
  },
  {
    path: '/files/new',
    name: 'UploadFiles',
    component: UniqueForm,
    props: (route) => {
      const appStore = useAppStore();
      const { isEdit } = storeToRefs(appStore);
      return {
        fields: [
          {
            label: 'Файл',
            type: 'file',
            model: 'name',
            required: true,
            onChange: (e) => {
              const file = e.target.files[0];
              appStore.createFile(file);
            },
          },
        ],
        model: isEdit.value ? isEdit.value : { filename: '' },
        onSubmit: async (item) => {
          if (isEdit.value == null) {
            router.push(`/files`);
          }
        },
      };
    },
  },
  // Сотрудники
  {
    path: '/employees',
    name: 'Employees',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { employees } = storeToRefs(appStore);
      return {
        header: 'сотрудников',
        rawData: employees,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/employees/new`);
        },
        addAction: () => {
          router.push(`/employees/new`);
        },
        deleteAction: (id) => {
          appStore.deleteEmployee(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchEmployees();

      next();
    },
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
    props: (route) => {
      const appStore = useAppStore();
      const { operations } = storeToRefs(appStore);
      return {
        header: 'операций',
        rawData: operations,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/operations/new`);
        },
        addAction: () => {
          router.push(`/operations/new`);
        },
        deleteAction: (id) => {
          appStore.deleteOperation(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchOperations();

      next();
    },
  },
  {
    path: '/operations/new',
    name: 'CreateOperation',
    component: OperationsForm,
  },
  // Пользователи
  {
    path: '/users',
    name: 'Users',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { users } = storeToRefs(appStore);
      return {
        header: 'пользователей',
        rawData: users,
        editAction: (item) => {
          appStore.setEditing(item);
          router.push(`/users/new`);
        },
        addAction: () => {
          router.push(`/users/new`);
        },
        deleteAction: (id) => {
          appStore.deleteUser(id);
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchUsers();

      next();
    },
  },
  {
    path: '/users/new',
    name: 'CreateUser',
    component: UserForm,
  },

  // История изменений
  {
    path: '/changes',
    name: 'Changes',
    component: UniqueList,
    props: (route) => {
      const appStore = useAppStore();
      const { changes } = storeToRefs(appStore);
      return {
        header: 'изменений',
        rawData: changes,
        editAction: () => {
          alert('Недоступно для этой таблицы');
        },
        addAction: () => {
          alert(
            'Недоступно для этой таблицы, все изменения вносятся автоматически',
          );
        },
        deleteAction: () => {
          alert('Недоступно для этой таблицы');
        },
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore.fetchChanges();

      next();
    },
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
