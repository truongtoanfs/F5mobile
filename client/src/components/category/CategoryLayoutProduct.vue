<template>
        <div class="grid grid-cols-2 gap-3 xl:grid-cols-4 mt-3 mb-20">
            <template v-for="(product, productIndex) in productsList" :key="product.id">
                <div class="relative bg-white px-2 py-3 rounded-lg text-f5-primary group overflow-hidden">
                    <router-link :to="product.path" class="flex items-center justify-center h-48 group overflow-hidden relative">
                        <img class="max-w-90-percent max-h-90-percent group-hover:max-w-full group-hover:max-h-full transition-all" :src="getImageUrl('/src/assets/images/'+ product.avatar)" :alt="product.title">
                        <div class="text-white bg-f5-secondary w-20 text-center text-xs font-medium py-0.5 rounded absolute top-1 right-2 xl:w-auto xl:px-0.5 xl:text-xsm xl:bottom-16 xl:right-1 xl:top-auto">{{calculateDiscountPercent(product.currentPrice, product.oldPrice)}}</div>
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
                        <button @click="statePreviewModal = productIndex" class="flex-1 py-1 rounded mr-1.5 bg-white border border-f5-secondary text-f5-secondary hover:text-white hover:bg-f5-secondary">Xem nhanh</button>
                    </div>
                    <!-- modal product item -->
                    <div v-if="statePreviewModal === productIndex" class="fixed inset-0 z-10 flex justify-center items-start pt-20">
                        <div @click="statePreviewModal = -1" class="overlay z-0"></div>
                        <div class="bg-white rounded-sm relative z-10">
                            <div class="flex">
                                <div class="mr-1 p-4">
                                    <img class="w-347px border border-gray-200" :src="getImageUrl('/src/assets/images/'+ product.avatar)" :alt="product.title">
                                </div>
                                <div>
                                    <div class="text-right"><button @click="statePreviewModal = -1" class="text-gray-400 px-2 py-0.5 hover:text-red-500"><i class="fas fa-times"></i></button></div>
                                    <div class="pr-4">
                                        <h4 class="text-xl font-medium">{{ product.title }}</h4>
                                        <p class="text-gray-600 mt-1">Mã sản phẩm: <span class="text-f5-black">{{ product.title }}</span></p>
                                        <div class="text-2xl font-semibold mt-2">{{ formatNumberToLocal(product.currentPrice) }}đ</div>
                                        <div>
                                            <span class="text-sm text-gray-600 line-through">{{ formatNumberToLocal(product.oldPrice) }}đ</span>
                                            <span class="bg-red-500 text-white text-xs font-medium px-1.5 py-px rounded-sm ml-2">{{calculateDiscountPercent(product.currentPrice, product.oldPrice)}}</span>
                                        </div>
                                        <div class="flex items-center mt-1">
                                            <span class="text-gray-600 w-28 text-sm">Màu sắc:</span>
                                            <div class="flex flex-wrap">
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Xanh ngọc</button>
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Đỏ</button>
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Đen</button>
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Vàng</button>
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Trắng</button>
                                                <button class="border border-gray-300 px-3 py-1 my-1 mr-2 hover:border-red-500 focus:border-red-500 text-f5-black">Tím</button>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-3">
                                            <span class="text-gray-600 w-28 text-sm">Số lượng:</span>
                                            <quantity-box />
                                        </div>
                                        <div class="flex">
                                            <button class="flex-1 py-2 rounded bg-red-500 text-white font-medium hover:bg-opacity-70 border border-gray-200 mr-5">Mua ngay</button>
                                            <button class="flex-1 py-2 rounded border border-f5-primary font-medium hover:bg-opacity-70 bg-red-100">Thêm vào giỏ hàng</button>
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
import QuantityBox from './QuantityBox.vue';
import { ref } from 'vue';
export default {
    props: {
        productsList: Array,
    },
    components: {
        QuantityBox,
    },
    setup(props) {
        const insurance = new Map();
        insurance.set('new99%', {
            title: "Giá máy Likenew 99%: luôn mặc định TẶNG MIỄN PHÍ gói bảo hành cao nhất",
            detail: [
                'Bảo hành 12 tháng (phần cứng + phần mềm)',
                'Full phụ kiện: sạc, cáp cao cấp (bảo hành 6 tháng)',
                'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
                'Dùng thử 39 ngày, đổi lỗi Miễn phí',
                'Với máy Lock hỗ trợ lắp sim ghép lên Quốc tế miễn phí',
            ],
        })
        insurance.set('new100%-actived', {
            title: "Giá máy New 100% đã kích hoạt:  luôn mặc định TẶNG MIỄN PHÍ gói bảo hành (không phải mua thêm bảo hành như những nơi khác):",
            detail: [
                'Bảo hành 12 tháng (phần cứng + phần mềm)',
                'Full phụ kiện: sạc, cáp cao cấp (bảo hành 6 tháng)',
                'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
                'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
                'Dùng thử 10 ngày, lỗi 1 đổi 1 Miễn phí',
            ],
        })
        insurance.set('new100%', {
            title: "Giá máy FullBox New 100% chưa kích hoạt",
            detail: [
                'Bảo hành 12 tháng chính hãng Apple và 12 tháng tại cửa hàng',
                'Full phụ kiện: Hộp, cáp sạc chính hãng Apple (bảo hành 12 tháng)',
                'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
                'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
                'Dùng thử 10 ngày, lỗi phần cứng 1 đổi 1',
            ],
        })

        const statePreviewModal = ref(-1);
        
        return {
            formatNumberToLocal,
            calculateDiscountPercent,
            getImageUrl,
            insurance,
            statePreviewModal,
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
    
</style>

