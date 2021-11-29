<template>
    <div class="grid grid-cols-2 gap-3 xl:grid-cols-4 mt-3 mb-20">
        <template v-for="(product, productIndex) in productsList" :key="productIndex">
            <div class="relative bg-white px-2 py-3 rounded-lg text-f5-primary group overflow-hidden">
                <router-link :to="product.path" class="flex items-center justify-center h-48 group overflow-hidden relative">
                    <img class="max-w-90-percent max-h-90-percent group-hover:max-w-full group-hover:max-h-full transition-all" :src="getImageUrl('/src/assets/images/'+ product.avatar)" :alt="product.title">
                    <div class="text-white bg-f5-secondary w-20 text-center text-xs font-medium py-0.5 rounded absolute top-1 right-2 xl:w-auto xl:px-0.5 xl:text-xsm xl:bottom-16 xl:right-1 xl:top-auto">-{{calculateDiscountPercent(product.currentPrice, product.oldPrice)}}%</div>
                </router-link>
                <router-link :to="product.path" class="font-semibold block text-center leading-5 -mt-1">{{ product.title }}</router-link>
                <div class="font-medium text-lg leading-5 flex items-center justify-center flex-wrap mt-1 md:mt-3.5 md:mb-1 lg:mt-2">{{ formatNumberToLocal(product.currentPrice) }} đ<span class="text-base text-gray-500 line-through mx-0.5 md:mx-1.5">{{ formatNumberToLocal(product.oldPrice) }}đ</span></div>
                <div class="mx-1.5 hidden xl:block">
                    <span class="block border-b border-gray-200 h-px"></span>
                </div>
                <div class="text-xs font-medium h-28 overflow-hidden px-1 mb-2 hidden xl:block">
                    <p class="mt-2">{{ insurance.get(product.state).title }}</p>
                    <ul class="text-f5-black pb-4">
                        <li v-for="(desciption, index) in insurance.get(product.state).detail" :key="index" class="py-0.5"><i class="fas fa-check"></i> {{ desciption }}</li>
                    </ul>
                </div>
                <div class="absolute bottom-0 inset-x-0 py-5 bg-white bg-opacity-90 items-center transform translate-y-14 group-hover:translate-y-0 transition-transform duration-300 hidden xl:flex">
                    <router-link :to="product.path" class="flex-1 py-1 rounded ml-1.5 mr-2.5 text-center bg-f5-secondary border border-f5-secondary text-white hover:text-f5-secondary hover:bg-white"><i class="fas fa-shopping-cart"></i></router-link>
                    <button @click="showModal(productIndex)" class="flex-1 py-1 rounded mr-1.5 bg-white border border-f5-secondary text-f5-secondary hover:text-white hover:bg-f5-secondary">Xem nhanh</button>
                </div>
                <!-- modal product item -->
                <div v-if="productModalData.modalState === productIndex" class="fixed inset-0 z-10 flex justify-center items-start pt-20">
                    <div @click="productModalData.modalState = -1" class="overlay z-0"></div>
                    <div class="bg-white rounded-sm relative z-10 max-w-960px">
                        <div class="flex">
                            <div class="mr-1 p-4">
                                <img class="w-347px border border-gray-200" :src="productModalData.avatar" :alt="product.title">
                            </div>
                            <div class="mb-4">
                                <div class="text-right"><button @click="productModalData.modalState = -1" class="text-gray-400 px-2 py-0.5 hover:text-red-500"><i class="fas fa-times"></i></button></div>
                                <div class="pr-4">
                                    <h4 class="text-xl font-medium">{{ product.title }}</h4>
                                    <p class="text-gray-600 mt-1">Mã sản phẩm: <span class="text-f5-black">{{ product.title }}</span></p>
                                    <div class="text-2xl font-semibold mt-2">{{ productModalData.currentPrice }}đ</div>
                                    <div>
                                        <span class="text-sm text-gray-600 line-through">{{ productModalData.oldPrice }}đ</span>
                                        <span class="bg-red-500 text-white text-xs font-medium px-1.5 py-px rounded-sm ml-2">-{{ productModalData.discountPercent }}%</span>
                                    </div>
                                    <div v-if="productModalData.colorError" class="border border-dashed border-red-400 px-4 py-2 my-2.5">
                                        <p class="text-red-500 text-sm font-medium">Quý Khách vui lòng chọn màu sắc, kích thước sản phẩm để tiến hành đặt hàng!</p>
                                    </div>
                                    <div class="flex items-center mt-1">
                                        <span class="text-gray-600 w-28 text-sm">Màu sắc:</span>
                                        <div class="flex flex-wrap">
                                            <button @click="chooseColor(image)" v-for="image in product.images" :key="image.id" :class="{'border-red-500' : productModalData.selectedColor === image.color}" class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 text-f5-black">{{ image.color }}</button>
                                        </div>
                                    </div>
                                    <div class="flex items-center my-3">
                                        <span class="text-gray-600 w-28 text-sm">Số lượng:</span>
                                        <quantity-box />
                                    </div>
                                    <div class="flex">
                                        <button @click="checkColour" class="flex-1 py-2 rounded bg-red-500 text-white font-medium hover:bg-opacity-70 border border-gray-200 mr-5">
                                            <router-link router-link to="/cart">Mua ngay</router-link>
                                        </button>
                                        <button @click="checkColour" class="flex-1 py-2 rounded border border-f5-primary font-medium hover:bg-opacity-70 bg-red-100">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end bg-gray-100 border-t border-gray-300 p-4">
                            <router-link :to="product.path" class="bg-white border border-gray-200 px-3 py-0.5 hover:shadow-sm hover:bg-gray-100 hover:text-blue-600 text-f5-black">Xem chi tiết <i class="fas fa-chevron-right text-xs"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { formatNumberToLocal, calculateDiscountPercent, getImageUrl } from '../../helpers';
import { insurance } from '../../data/initialData';
import QuantityBox from './QuantityBox.vue';
import { reactive, ref } from 'vue';
export default {
    props: {
        productsList: Array,
    },
    components: {
        QuantityBox,
    },
    setup(props) {
        const productModalData = reactive({
            colorError: false,
            modalState: -1,
            avatar: '',
            currentPrice: 0,
            oldPrice: 0,
            discountPercent: 0,
            selectedColor: '',
        })
        const selectedProduct = ref({});
        function showModal(productIndex) {
            productModalData.modalState = productIndex;
            selectedProduct.value = props.productsList[productIndex];
            productModalData.avatar = getImageUrl('/src/assets/images/'+ selectedProduct.value.avatar);
            productModalData.currentPrice = formatNumberToLocal(selectedProduct.value.currentPrice);
            productModalData.oldPrice = formatNumberToLocal(selectedProduct.value.oldPrice);
            productModalData.discountPercent = calculateDiscountPercent(selectedProduct.value.currentPrice, selectedProduct.value.oldPrice);
        }
        function checkColour(image) {
            if(!productModalData.selectedColor) {
               productModalData.colorError = true;
            }
        }
        
        function chooseColor(image) {
            productModalData.selectedColor = image.color;
            productModalData.avatar = getImageUrl('/src/assets/images/'+ image.url);
            productModalData.currentPrice = formatNumberToLocal(image.price);
            productModalData.discountPercent = calculateDiscountPercent(image.price, selectedProduct.value.oldPrice);
            productModalData.colorError = false;
        }
        return {
            formatNumberToLocal,
            calculateDiscountPercent,
            getImageUrl,
            insurance,
            checkColour,
            showModal,
            productModalData,
            chooseColor,
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
    .w-347px {
        width: 347px;
    }
    .max-w-960px {
        max-width: 960px;
    }
    
</style>

