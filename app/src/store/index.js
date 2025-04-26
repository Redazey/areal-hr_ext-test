import { defineStore } from 'pinia';
import axios from 'axios';
import router from "@/router/index.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST || 'https://localhost:3001/',
  timeout: 5000,
  withCredentials: true,
});

export const useAppStore = defineStore('app', {
  state: () => ({
    isEdit: null,
    organizations: [],
    departments: [],
    professions: [],
    employees: [],
    users: [],
    user: null,
    roles: [],
    files: [],
    operations: [],
    changes: []
  }),

  actions: {
    setEditing(object) {
      this.isEdit = object;
    },
    stopEditing() {
      this.isEdit = null;
    },
    // Авторизация
    async auth(credentials) {
      try {
        await api.post('/auth/login', credentials);
        router.push('/');
      } catch (error) {
        console.error('Error while auth:', error);
      }
    },

    async checkAuthenticated() {
      try {
        const { data } = await api.get('/auth/me');
        this.user = data;
      } catch (error) {
        console.error('Not authenticated:', error);
      }
    },

    // Функции для получения данных
    async fetchOrganizations() {
      try {
        const response = await api.get('/organization');
        this.organizations = response.data;
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    },

    async fetchDepartments() {
      try {
        const response = await api.get('/department');
        this.departments = response.data;
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },

    async fetchProfessions() {
      try {
        const response = await api.get('/profession');
        this.professions = response.data;
      } catch (error) {
        console.error('Error fetching professions:', error);
      }
    },

    async fetchEmployees() {
      try {
        const response = await api.get('/employee');
        this.employees = response.data;
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },

    async fetchUsers() {
      try {
        const response = await api.get('/user');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    async fetchRoles() {
      try {
        const response = await api.get('/role');
        this.roles = response.data;
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    },

    async fetchFiles() {
      try {
        const response = await api.get('/file');
        this.files = response.data;
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    },

    async fetchOperations() {
      try {
        const response = await api.get('/operation');
        this.operations = response.data;
      } catch (error) {
        console.error('Error fetching operations:', error);
      }
    },

    async fetchChanges() {
      try {
        const response = await api.get('/change');
        this.changes = response.data;
      } catch (error) {
        console.error('Error fetching changes:', error);
      }
    },

    // CRUD операции для организаций
    async createOrganization(organization) {
      try {
        await api.post('/organization', organization);
        await this.fetchOrganizations(); // Обновить список организаций
      } catch (error) {
        console.error('Error creating organization:', error);
      }
    },

    async updateOrganization(organization) {
      try {
        await api.patch(`/organization/${organization.id}`, organization);
        await this.fetchOrganizations(); // Обновить список организаций
      } catch (error) {
        console.error('Error updating organization:', error);
      }
    },

    async deleteOrganization(id) {
      try {
        await api.delete(`/organization/${id}`);
        await this.fetchOrganizations(); // Обновить список организаций
      } catch (error) {
        console.error('Error deleting organization:', error);
      }
    },

    // CRUD операции для сотрудников
    async createEmployee(employee) {
      try {
        await api.post('/employee', employee);
        await this.fetchEmployees();
      } catch (error) {
        console.error('Error creating employee:', error);
      }
    },

    async updateEmployee(employee) {
      try {
        await api.patch(`/employee/${employee.id}`, employee);
        await this.fetchEmployees();
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    },

    async deleteEmployee(id) {
      try {
        await api.delete(`/employee/${id}`);
        await this.fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },

    // CRUD операции для отделов
    async createDepartment(department) {
      try {
        await api.post('/department', department);
        await this.fetchDepartments();
      } catch (error) {
        console.error('Error creating department:', error);
      }
    },

    async updateDepartment(department) {
      try {
        await api.patch(`/department/${department.id}`, department);
        await this.fetchDepartments();
      } catch (error) {
        console.error('Error updating department:', error);
      }
    },

    async deleteDepartment(id) {
      try {
        await api.delete(`/department/${id}`);
        await this.fetchDepartments();
      } catch (error) {
        console.error('Error deleting department:', error);
      }
    },

    // CRUD операции для должностей
    async createProfession(profession) {
      try {
        await api.post('/profession', profession);
        await this.fetchProfessions();
      } catch (error) {
        console.error('Error creating profession:', error);
      }
    },

    async updateProfession(profession) {
      try {
        await api.patch(`/profession/${profession.id}`, profession);
        await this.fetchProfessions();
      } catch (error) {
        console.error('Error updating profession:', error);
      }
    },

    async deleteProfession(id) {
      try {
        await api.delete(`/profession/${id}`);
        await this.fetchProfessions();
      } catch (error) {
        console.error('Error deleting profession:', error);
      }
    },

    // CRUD операции для пользователей
    async createUser(user) {
      try {
        await api.post('/user', user);
        await this.fetchUsers();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },

    async updateUser(id, user) {
      try {
        await api.put(`/user/${id}`, user);
        await this.fetchUsers();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },

    async deleteUser(id) {
      try {
        await api.delete(`/user/${id}`);
        await this.fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },

    // CRUD операции для файлов
    async createFile(file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        await api.post('/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        await this.fetchFiles();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },

    async downloadFile(id, filename) {
      try {
        const response = await api.get(`/file/${id}`, {
          responseType: 'blob',
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([response.data]));
        link.download = filename;
        link.click();
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    },

    async deleteFile(id) {
      try {
        await api.delete(`/file/${id}`);
        await this.fetchFiles();
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    },

    // CRUD операции для кадровых операций - ну и тавтология)
    async createOperation(operation) {
      try {
        await api.post('/operation', operation);
        await this.fetchOperations();
      } catch (error) {
        console.error('Error creating operation:', error);
      }
    },

    async deleteOperation(id) {
      try {
        await api.delete(`/operation/${id}`);
        await this.fetchOperations();
      } catch (error) {
        console.error('Error deleting operation:', error);
      }
    },
  },
});
