<template>
    <div class="hidden bg-white rounded-lg overflow-hidden xl:block font-medium">
        <div class="flex justify-between items-center border-b border-gray-200 py-2.5 px-3">
            <span>Giá:</span>
            <span class="text-4xl font-medium text-f5-primary">{{formatNumberToLocal(priceProduct)}}₫</span>
        </div>
        <div class="flex justify-between px-3 pt-3 pb-2.5 text-gray-500 text-opacity-90">
            <div class="leading-7">
                <p>Giá niêm yết:</p>
                <p class="line-through">{{formatNumberToLocal(14000000)}}đ</p>
            </div>
            <div class="leading-7">
                <p>Tiết kiệm:</p>
                <p class="text-f5-secondary font-medium">{{formatNumberToLocal(3000000)}}đ</p>
            </div>
            <div class="leading-7">
                <p>Tình trạng:</p>
                <p class="text-f5-secondary">Còn hàng</p>
            </div>
        </div>
        <button class="bg-f5-primary w-full text-white text-2xl uppercase py-2.5">Mua ngay</button>
    </div>
</template>

<script>
import { formatNumberToLocal } from '../../helpers';
export default {
    props: {
        priceProduct: Number,
    },
    setup() {
        return {
            formatNumberToLocal,
        }
    },
}
</script>