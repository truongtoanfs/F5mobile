<template>
    <div>
        <h2 class="text-2xl text-f5-primary text-center font-bold py-6 xl:text-f5-black xl:font-medium xl:text-left xl:pb-4">Sản phẩm liên quan</h2>
        <div class="grid grid-cols-2 gap-3 pb-4 xl:gap-0 xl:bg-white xl:rounded-lg xl:overflow-hidden xl:pb-2">
            <template v-for="(product, index) in relativeProduct" :key="product.id">
                <div class="bg-white px-2 py-3 rounded-lg text-f5-primary xl:rounded-none xl:py-0 xl:px-0">
                    <router-link :to="product.path" class="flex items-center justify-center h-48 group overflow-hidden relative">
                        <img class="max-w-90-percent max-h-90-percent group-hover:max-w-full group-hover:max-h-full transition-all" :src="getImageUrl('/src/assets/images/'+ product.avatar)" alt="iphone 12 Lock 64Gb">
                        <div class="text-white bg-f5-secondary w-20 text-center text-xs font-medium py-1 rounded absolute top-1 right-2 xl:w-auto xl:px-1 xl:text-xsm xl:bottom-7 xl:right-1 xl:top-auto">-{{calculateDiscountPercent(product.currentPrice, product.oldPrice)}}%</div>
                    </router-link>
                    <router-link :to="product.path" class="font-semibold block text-center leading-5 -mt-1 xl:text-f5-black xl:text-sm">{{ product.title }}</router-link>
                    <div class="font-medium text-lg leading-5 flex items-center justify-center flex-wrap mt-1 md:mt-3.5 md:mb-1 lg:mt-2">{{ formatNumberToLocal(product.currentPrice) }} đ</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { formatNumberToLocal, calculateDiscountPercent, getImageUrl } from '../../helpers';
export default {
    props: {
        relativeProduct: Array,
    },
    setup() {
        return {
            formatNumberToLocal,
            calculateDiscountPercent,
            getImageUrl,
        }
    },
}
</script>

<style scoped>
.max-w-90-percent {
    max-width: 90%;
}
.max-h-90-percent {
    max-height: 90%;
}
</style>