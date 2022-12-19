<template>
    <div class="flex grid-cols-3 gap-4 content-center  ">
    
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div class="ml-8">
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                   
                    <a v-for="page in pagination" :key="page" @click=" ChangePagination(page) "  :class="[ page != pageNow  ? 'relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20' : 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20']" aria-current="page" href="#" >
                    {{page}} </a>

                </nav>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['pagination', 'pageNow', 'ChangePagination'],

};


</script>

<style></style>
