<template>
  <div class="bg-gray-200">
    <div class="md:max-w-3xl md:mx-auto lg:max-w-3xl xl:max-w-1300">
      <div class="pt-2 xl:flex lg:pt-10">
        <div class="lg:flex-1">
          <div class="bg-white rounded-t-lg py-3 px-2 xl:pt-px">
            <h1 class="text-f5-primary text-lg font-bold text-center mt-1 md:mt-4 lg:text-2xl xl:text-left xl:ml-20">{{
                currentProduct?.title
            }}</h1>
            <div class="xl:flex xl:mt-4">
              <avatar :imageProduct="imageProduct" />
              <div class="lg:flex lg:flex-col xl:flex-1">
                <product-colors :colorsList="currentProduct.images" @selectColor="selectColor" />
                <price-on-mobile :priceProduct="priceProduct" />
                <product-summary v-if="currentProduct?.id" :currentProduct="currentProduct" />
              </div>
            </div>
            <hotline-on-mobile />
          </div>
          <installment-instructions />
        </div>
        <div class="xl:w-80 xl:ml-4">
          <price-on-laptop :priceProduct="priceProduct" />
          <relative-product :relativeProduct="relativeProduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstallmentInstructions from '../components/product/InstallmentInstructions.vue';
import ProductSummary from '../components/product/ProductSummary.vue';
import Avatar from '../components/product/Avatar.vue';
import ProductColors from '../components/product/ProductColors.vue';
import HotlineOnMobile from '../components/product/HotlineOnMobile.vue';
import PriceOnLaptop from '../components/product/PriceOnlaptop.vue';
import PriceOnMobile from '../components/product/PriceOnMobile.vue';
import relativeProduct from '../components/product/RelativeProduct.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { watch, ref } from 'vue';
export default {
  props: {
    productName: String,
    itemPath: String,
  },
  components: {
    InstallmentInstructions,
    ProductSummary,
    relativeProduct,
    Avatar,
    HotlineOnMobile,
    PriceOnLaptop,
    ProductColors,
    PriceOnMobile,
  },
  setup(props) {
    /* get products */
    const store = useStore();
    store.dispatch('getProductsList');
    const relativeProduct = ref([]);
    const currentProduct = ref({});
    const priceProduct = ref(0);
    const imageProduct = ref('');
    const productSeries = computed(() => findProductSeries(store.getters.productsList, props.itemPath));
    watch(productSeries, () => {
      if (productSeries.value.series) {
        relativeProduct.value = [...productSeries.value.series];
        currentProduct.value = relativeProduct.value.splice(productSeries.value.productIndex, 1)[0];
        priceProduct.value = currentProduct.value.currentPrice;
        imageProduct.value = findImageProduct(currentProduct.value.images);
      }
    });
    function findProductSeries(productsList, path) {
      if (!productsList.length) return {};
      for (let product of productsList) {
        for (let model of product.modelsList) {
          for (let series of model.categoryDetail) {
            if (!series.products.length) continue;
            for (let product of series.products) {
              if (product.path === path) {
                return {
                  productIndex: product.id - 1,
                  series: series.products
                }
              }
            }
          }
        }
      }
      return {};
    }
    function findImageProduct(images) {
      return images.find(image => image.isSelectedColor).url;
    }

    function selectColor(selectedColor) {
      priceProduct.value = selectedColor.price;
      imageProduct.value = selectedColor.url;
    }

    return {
      currentProduct,
      relativeProduct,
      priceProduct,
      imageProduct,
      selectColor,
    }
  },
}
</script>
