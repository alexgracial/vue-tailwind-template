<template>

    <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ user.id }}
                </th>
                <td class="py-4 px-6">
                    {{ user.username }}
                </td>
                <td class="py-4 px-6">
                    {{ user.password }}
                </td>
                <td class="py-4 px-6">
                    {{ user.email }}
                </td>
                <td class="py-2">
                    <button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</button>
                    <button  @click="deleteUser()" type="button"  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button> 
                </td>
            </tr>
            
        </tbody>

</template>

<script>
export default {

    props: [
        "user",
    ],

    method: {

        deleteUser(){
            crudApi.delete('/crud').then(({ data }) => {
         
           });
        },
        mounted() {
            
            this.deleteUser();
        },

    },


}
</script>

<style>

</style>