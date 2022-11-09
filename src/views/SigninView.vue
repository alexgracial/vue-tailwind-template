<template>
    <signin />
</template>
    
    <script>
import signin from '@/components/Signin.vue';

import crudApi from '@/api/crudApi';

export default {
    components: { signin },
    methods: {
        // CREO USUARIO MEDIANTE POST
        // FORM: ASIGNANDO LAS PROPIEDADES, LAS RECIBES CON V:MODEL EN LA DATA.
        // axios middleware, recibe y envia a express.

        createUser() {
            crudApi.post('/signup', this.form).then(({ data }) => {
                if (data.success == true) {
                    this.$router.push({
                        path: '/crud'
                    });
                }
            });
        }
    },

    data() {
        return {
            form: {
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