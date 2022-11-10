<template>
    <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
            <td class="p-4 w-4">
                <div class="flex items-center">
                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <!-- <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <input />
                </th> -->
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span>{{ user.id }}</span>
            </th>
            <td class="py-4 px-6">
                <span v-if="updateState == false">{{ user.username }}</span>
                <input v-else v-model="editUser.username" />
            </td>
            <td class="py-4 px-6">
                <span v-if="updateState == false">{{ user.password }}</span>
                <input v-else v-model="editUser.password" />
            </td>
            <td class="py-4 px-6">
                <span v-if="updateState == false">{{ user.email }}</span>
                <input v-else v-model="editUser.email" />
            </td>
            <td class="py-2">
                <button
                    @click="updateUser(user)"
                    type="button"
                    v-if="updateState == false"
                    class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Editar
                </button>
                <button @click="saveUser()" type="button" v-else class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Guardar
                </button>
                <button @click="deleteUser()" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>
            </td>
        </tr>
    </tbody>
</template>

<script>
import crudApi from '@/api/crudApi';

export default {
    props: ['user'],

    methods: {
        deleteUser() {
            crudApi.delete('/crud/' + this.user.id).then(({ data }) => {
                console.log('deleteUser ');
            });
        },

        updateUser() {
            this.editUser = this.user;
            this.updateState = true;
        },

        saveUser() {
            crudApi.put('/crud/' + this.user.id, this.user).then(({ data }) => {
                if (data.success == true) {
                    this.$router.push({
                        path: '/crud'
                    });
                } else {
                    console.log('ERROR');
                }
            });
        }
    },

    data() {
        return {
            updateState: false,
            editUser: {}
        };
    }
};
</script>

<style></style>
