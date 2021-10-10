<template>
    <div class="bg-gray-200">
        <banner />
        <product-layout :productsList="iphone11Series" layoutTitle="11/ 11PRO/ 11PROMAX" />
        <product-layout :productsList="iphoneXSeries" layoutTitle="X/ XS/ XSMAX/ XR" />
        <product-layout :productsList="iphone8Series" layoutTitle="8/ 8PLUS" />
        <product-layout :productsList="iphone7Series" layoutTitle="7/ 7PLUS" />
        <product-layout :productsList="iphone6Series" layoutTitle="6/ 6S/ 6SPLUS" />
        <search-tags />
    </div>
</template>

<script>
import ProductLayout from '../components/home/ProductLayout.vue';
import SearchTags from '../components/home/SearchTags.vue';
import Banner from '../components/home/Banner.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import { onUpdated } from '@vue/runtime-core';

export default {
    components: {
        ProductLayout,
        Banner,
        SearchTags,
    },
    setup() {
        const store = useStore();
        store.dispatch('getProductsList');
        const iphone11Series = computed(() => store.getters.iphone11Series);
        const iphoneXSeries = computed(() => store.getters.iphoneXSeries);
        const iphone8Series = computed(() => store.getters.iphone8Series);
        const iphone7Series = computed(() => store.getters.iphone7Series);
        const iphone6Series = computed(() => store.getters.iphone6Series);
        onUpdated(() => {
            console.log(iphone6Series.value);
        })
        
        return {
            iphone11Series,
            iphoneXSeries,
            iphone8Series,
            iphone7Series,
            iphone6Series,
        }
    },
}
</script>