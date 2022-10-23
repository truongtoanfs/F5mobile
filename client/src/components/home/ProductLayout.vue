<template>
  <div class="pb-2">
    <div class="py-5 flex flex-col xl:flex-row xl:justify-between xl:items-center xl:py-1">
      <div class="flex flex-col items-center xl:flex-row">
        <h2 class="text-xl font-bold">{{ layoutTitle }}</h2>
        <router-link
          :to="productCategoriesLink"
          class="text-lg py-0.5 px-3 bg-f5-primary text-white hover:text-gray-100 rounded mt-2.5 xl:mt-0 xl:ml-4"
        >Xem thêm</router-link>
      </div>
      <div
        class="hidden capitalize text-base font-medium mt-4 mb-2 md:flex md:items-center md:justify-center xl:text-white xl:font-normal xl:uppercase"
      >
        <router-link
          v-for="linkObject in productLinksList"
          :key="linkObject.id"
          :to="linkObject.seriesPath"
          class="px-4 xl:bg-gray-500 xl:bg-opacity-70 xl:hover:bg-opacity-100 xl:rounded-md xl:ml-1.5 xl:py-1 xl:px-2"
        >{{ linkObject.seriesName }}</router-link>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 xl:grid-cols-5">
      <template v-for="(product, index) in productsList" :key="product.id">
        <div v-if="index < 10" class="bg-white px-2 py-3 rounded-lg text-f5-primary">
          <router-link
            :to="product.path"
            class="flex items-center justify-center h-48 group overflow-hidden relative"
          >
            <img
              class="max-w-90-percent max-h-90-percent group-hover:max-w-full group-hover:max-h-full transition-all"
              :src="getImageUrl('/src/assets/images/' + product.avatar)"
              alt="iphone 12 Lock 64Gb"
            />
            <div
              class="text-white bg-f5-secondary w-20 text-center text-xs font-medium py-1 rounded absolute top-1 right-2 xl:w-auto xl:px-1 xl:text-xsm xl:bottom-7 xl:right-1 xl:top-auto"
            >-{{ calculateDiscountPercent(product.currentPrice, product.oldPrice) }}%</div>
          </router-link>
          <router-link
            :to="product.path"
            class="font-semibold block text-center leading-5 -mt-1"
          >{{ product.title }}</router-link>
          <div
            class="font-medium text-lg leading-5 flex items-center justify-center flex-wrap mt-1 md:mt-3.5 md:mb-1 lg:mt-2"
          >
            {{ formatNumberToLocal(product.currentPrice) }}
            <span
              class="text-base text-gray-500 line-through mx-0.5 md:mx-1.5"
            >{{ formatNumberToLocal(product.oldPrice) }}đ</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { navList } from '../../data/initialData';
import { formatNumberToLocal, calculateDiscountPercent, getImageUrl } from '../../helpers';
export default {
  props: {
    layoutTitle: String,
    productsList: Array,
  },
  setup(props) {
    const productCategoriesObject = navList.find(item => item.categoryName === props.layoutTitle.toLowerCase());
    const productCategoriesLink = productCategoriesObject.categoryPath;
    const productLinksList = productCategoriesObject.categoryList;

    return {
      productCategoriesLink,
      productLinksList,
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
.text-xsm {
  font-size: 11px;
}
</style>

