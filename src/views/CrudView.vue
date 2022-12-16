<template>
    <Navbar />
    <div class=" flex-auto  ">
        
        <div class="grid place-items-center">
            <Card />
        </div>
       
        <div class="">
            <Dashboard />
        </div>

    
    </div>
</template>
    
    <script>
import Navbar from '@/components/Navbar.vue';
import Dashboard from '@/components/Dashboard.vue';
import Card from '@/components/Card.vue';

export default {
    components: { Navbar, Dashboard, Card  }
};
</script>
    
    <style>
</style>