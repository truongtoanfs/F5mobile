<template>
    <div class="container">
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

export default {
    components: {
        ProductLayout,
        Banner,
        SearchTags,
    },
    setup() {
        const store = useStore();
        store.dispatch('getProductsList');
        const iphone11Series = computed(() => getProductList(store.getters.productObjectFromPath('/categories/11-11pro-11promax')));
        const iphoneXSeries = computed(() => getProductList(store.getters.productObjectFromPath('/categories/x-xs-xsmax-xr')));
        const iphone8Series = computed(() => getProductList(store.getters.productObjectFromPath('/categories/8-8plus')));
        const iphone7Series = computed(() => getProductList(store.getters.productObjectFromPath('/categories/7-7plus')));
        const iphone6Series = computed(() => getProductList(store.getters.productObjectFromPath('/categories/6-6s-6plus-6splus')));
        
        function getProductList(productObject) {
            let result = [];
            productObject?.categoryDetail.forEach(item => result = result.concat(item.products));
            return result;
        }

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