<template>
    <div class="relative flex items-center group">
        <span class="mr-3 font-medium border-b border-transparent text-lg">Sắp xếp:</span>
        <div class="flex items-center justify-between w-36 border-b border-gray-500 text-gray-500">
            <span>{{ productSortType }}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="hidden group-hover:block absolute top-full -inset-x-1 z-10 px-4 pt-2.5 pb-4 bg-white border border-gray-200 shadow-lg rounded-md">
            <button @click="$emit('sortProducts', sortCondition)" v-for="(sortCondition, index) in sortConditions" :key="index" :class="{'font-medium' : sortCondition === productSortType}" class="block py-1 hover:text-f5-primary">{{ sortCondition }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sortConditions: Array,
        productSortType: String,
    },
    emits: ['sortProducts'],
}
</script>