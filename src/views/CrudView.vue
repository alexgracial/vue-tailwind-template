<template>
    <Navbar />
    <div class=" flex  ">

        <div class="flex-auto w-64">
            <Dashboard />
        </div>

        <div class="flex-auto w-6">
            <Card />
        </div>
    
    </div>
</template>
    
<script>

import Navbar from '@/components/Navbar.vue';
import Dashboard from '@/components/Dashboard.vue';
import Card from '@/components/Card.vue';

export default {
    components: { Navbar, Dashboard, Card }
};

</script>
    
    <style>
</style>