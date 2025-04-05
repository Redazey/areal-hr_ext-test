import { defineStore } from 'pinia';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
})

export const useAppStore = defineStore('app', {
    state: () => ({
        organizations: [],
        departments: [],
        professions: [],
        employees: [],
        users: [],
    }),

    actions: {
        // Функции для получения данных
        async fetchOrganizations() {
            try {
                const response = await  api.get('/api/organizations');
                this.organizations = response.data;
            } catch (error) {
                console.error('Error fetching organizations:', error);
            }
        },

        async fetchDepartments() {
            try {
                const response = await  api.get('/api/departments');
                this.departments = response.data;
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        },

        async fetchProfessions() {
            try {
                const response = await  api.get('/api/professions');
                this.professions = response.data;
            } catch (error) {
                console.error('Error fetching professions:', error);
            }
        },

        async fetchEmployees() {
            try {
                const response = await  api.get('/api/employees');
                this.employees = response.data;
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        },

        async fetchUsers() {
            try {
                const response = await  api.get('/api/users');
                this.users = response.data;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },

        // CRUD операции для организаций
        async createOrganization(organization) {
            try {
                await  api.post('/api/organizations', organization);
                await this.fetchOrganizations();  // Обновить список организаций
            } catch (error) {
                console.error('Error creating organization:', error);
            }
        },

        async updateOrganization(id, organization) {
            try {
                await  api.put(`/api/organizations/${id}`, organization);
                await this.fetchOrganizations();  // Обновить список организаций
            } catch (error) {
                console.error('Error updating organization:', error);
            }
        },

        async deleteOrganization(id) {
            try {
                await  api.delete(`/api/organizations/${id}`);
                await this.fetchOrganizations();  // Обновить список организаций
            } catch (error) {
                console.error('Error deleting organization:', error);
            }
        },

        // CRUD операции для сотрудников
        async createEmployee(employee) {
            try {
                await  api.post('/api/employees', employee);
                await this.fetchEmployees(); 
            } catch (error) {
                console.error('Error creating employee:', error);
            }
        },

        async updateEmployee(id, employee) {
            try {
                await  api.put(`/api/employees/${id}`, employee);
                await this.fetchEmployees(); 
            } catch (error) {
                console.error('Error updating employee:', error);
            }
        },

        async deleteEmployee(id) {
            try {
                await  api.delete(`/api/employees/${id}`);
                await this.fetchEmployees(); 
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        },

        // CRUD операции для отделов
        async createDepartment(department) {
            try {
                await  api.post('/api/departments', department);
                await this.fetchDepartments();
            } catch (error) {
                console.error('Error creating department:', error);
            }
        },

        async updateDepartment(id, department) {
            try {
                await  api.put(`/api/departments/${id}`, department);
                await this.fetchDepartments();
            } catch (error) {
                console.error('Error updating department:', error);
            }
        },

        async deleteDepartment(id) {
            try {
                await  api.delete(`/api/departments/${id}`);
                await this.fetchDepartments();
            } catch (error) {
                console.error('Error deleting department:', error);
            }
        },

        // CRUD операции для должностей
        async createProfession(profession) {
            try {
                await  api.post('/api/professions', profession);
                await this.fetchProfessions();
            } catch (error) {
                console.error('Error creating profession:', error);
            }
        },

        async updateProfession(id, profession) {
            try {
                await  api.put(`/api/professions/${id}`, profession);
                await this.fetchProfessions();
            } catch (error) {
                console.error('Error updating profession:', error);
            }
        },

        async deleteProfession(id) {
            try {
                await  api.delete(`/api/professions/${id}`);
                await this.fetchProfessions();
            } catch (error) {
                console.error('Error deleting profession:', error);
            }
        },

        // CRUD операции для пользователей
        async createUser(user) {
            try {
                await  api.post('/api/users', user);
                await this.fetchUsers();
            } catch (error) {
                console.error('Error creating user:', error);
            }
        },

        async updateUser(id, user) {
            try {
                await  api.put(`/api/users/${id}`, user);
                await this.fetchUsers();
            } catch (error) {
                console.error('Error updating user:', error);
            }
        },

        async deleteUser(id) {
            try {
                await  api.delete(`/api/users/${id}`);
                await this.fetchUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        },
    },
});
