<template>
    <div class="m-8 ">
        <div class="p-4 w-full max-w-s bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form  @submit.prevent="createUser()" class="space-y-5" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Registrar / Actualizar usuario</h5>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electronico</label>
                    <input
                        v-model="user.email"
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                    <input
                        v-model="user.username"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Pepito"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
                    <input
                        v-model="user.password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repite la contraseña</label>
                    <input 
                        v-model="user.password2"
                        type="password"
                        name="password2" 
                        id="password2"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <button @click="reloadPage()" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
            </form>
        </div>
    </div>
</template>

<script>
import crudApi from '@/api/crudApi';

export default {
    methods: {
        
        // CREO USUARIO MEDIANTE POST
        // FORM: ASIGNANDO LAS PROPIEDADES, LAS RECIBES CON V:MODEL EN LA DATA.
        // axios middleware, recibe y envia a express.

        createUser() {
            if (this.user.password === this.user.password2) {
                crudApi.post('/crud', this.user).then(({ data }) => {
                    if (data.success == true) {
                        this.$router.push({
                            path: '/crud'
                        });
                    }
                });
            } else  {
                console.log('ERROR')
            }
        },
        reloadPage() {
            window.location.reload();
        }

    },

    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                password2: ''
            }
        };
    }
};
</script>

<style>
</style>