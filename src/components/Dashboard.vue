<template>
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

                <fila-dash v-for="(user, index) in users" :user="user" :key="index"  />
            </table>
        </div>
    </div>
</template>

<script>
import FilaDash from './FilaDash.vue';
import crudApi from '../api/crudApi.js';

export default {
    components: {
        FilaDash
    },
    methods: {
        // GET = PEDIR USUARIOS = data
        getUsers() {
            crudApi.get('/crud').then(({ data }) => {
                // LA DATA QUE DEVUELVE EL BACKEND 
                this.users = data;
            });
        }
    },
    
    data() {
        return {
            users: []
        };
    },

    mounted() {
        // created , LLAMAMOS A LA PETICION GET 
        this.getUsers();
    }
};
</script>

<style>
</style>