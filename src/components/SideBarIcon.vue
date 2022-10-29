<template>
    <div class="sidebar-icon group">
        <i :class="`fa fa-${icon}`"></i>
        <span class="sidebar-tooltip group-hover:scale-100">{{ text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {},
        text: { default: 'tooltip', type: String }
    }
};
</script>

<style></style>
