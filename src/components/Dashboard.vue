<template>


    <div class="w-64 m-2 ml-8">
        <label for="Buscar por Nombre" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input v-model="searchValue"
                type="search"
                id="search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
            />
        </div>
    </div>

    <div class="m-8">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-all" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">Id</th>
                        <th scope="col" class="py-3 px-6">Nombre</th>
                        <th scope="col" class="py-3 px-6">Contraseña</th>
                        <th scope="col" class="py-3 px-6">Correo</th>
                        <th scope="col" class="py-3 px-6">Acción</th>
                    </tr>
                </thead>
       
                    <fila-dash v-for="(user, index) in usersLists.slice(( page - 1 ) * 3, page * 3 )" :user="user" :key="index" />
                    
                    
                </table>
            </div>
        </div>
        <pagination-vue :pagination="dashboardPagination"  :pageNow="page" :ChangePagination="ChangePagination"/> 
    
</template>

<script>
import FilaDash from './FilaDash.vue';
import crudApi from '../api/crudApi.js';
import PaginationVue from './Pagination.vue';

export default {
    components: {
        FilaDash, PaginationVue
    },
    data() {
        return {
            users: [],
            searchValue:'',
            page: 1,
        };
    },

    // COMPUTED : TRANSFORMA LA VARIABLE ANTES DE DEVOLVERLA.
    computed: {

        dashboardPagination(){ // NUMERO DE PAGINAS

            return  Math.ceil(   this.users.length / 3)
    
        },

        usersLists(){

            if (this.searchValue.trim().length > 0) {
                return this.users.filter((user) => // este user es inventado para el filter
                 user.username.toLowerCase()
                 .includes(this.searchValue.trim()
                 .toLowerCase())) // TRUE
            }
            
            return this.users

        }

    },

    methods: {
        // GET = PEDIR USUARIOS = data
        getUsers() {
            crudApi.get('/crud').then(({ data }) => {
                // LA DATA QUE DEVUELVE EL BACKEND // response
                // EXPRESS
                this.users = data;
            });
        },

        ChangePagination(pageGo){

            this.page = pageGo 

        }
    },

    mounted() {
        // created , LLAMAMOS A LA PETICION GET
        this.getUsers();
    }
};
</script>

<style></style>
