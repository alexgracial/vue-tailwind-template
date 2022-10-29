<template>
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon :icon="'house'" />
        <SideBarIcon :icon="'house'" />
        <SideBarIcon :icon="'house'" />
        <SideBarIcon :icon="'house'" />
    </div>
</template>

<script>
import SideBarIcon from './SideBarIcon.vue';

export default {
    components: { SideBarIcon }
};
</script>

<style></style>
