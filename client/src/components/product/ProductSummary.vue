<template>
    <div>
        <div :class="setHeight ? 'max-h-48 overflow-hidden': ''" class="transition-maxHeight duration-1000">
            <div class="text-gray-500 mt-1">Tóm tắt sản phẩm:</div>
            <p class="text-f5-primary font-medium text-sm mt-1">{{ insurance.get(currentProduct.state).title }}</p>
            <ul class="text-xs leading-5">
                <li v-for="(desciption, index) in insurance.get(currentProduct.state).detail" :key="index"><i class="fas fa-check"></i> {{ desciption }} </li>
            </ul>
            <div class="w-28 pb-px border-b border-dashed border-black my-2"></div>
            <div class="text-f5-primary text-lg uppercase font-bold">Thông số kỹ thuật</div>
            <div class="text-sm mt-1">
                <div v-for="(specification, specificationKey) in currentProduct.specifications" :key="specificationKey" class="flex py-0.5">
                    <span class="inline-block w-32">{{ getSpecificationTittle(specificationKey) }}</span>
                    <span class="flex-1 font-medium">{{ specification }}</span>
                </div>
            </div>
        </div>  
        <button @click="setHeight = !setHeight" class="text-f5-secondary font-bold my-1">{{setHeight ? 'Xem thêm' : 'Thu gọn'}} <i class="fas fa-angle-double-left transform translate-y-px"></i></button>
        <div class="border-b pb-3 border-gray-200"></div>
    </div>
</template>

<script>
import { insurance } from '../../data/initialData';
import { ref } from 'vue';
export default {
    props: {
        currentProduct: Object,
    },
    setup() {
        const setHeight = ref(true);
        function getSpecificationTittle(specificationKey) {
            const specificationName = {
                screen: 'Màn hình',
                cpu: 'CPU',
                ram: 'RAM',
                rearCamera: 'Camera sau',
                frontCamera: 'Camera trước',
                internalMemory: 'Bộ nhớ trong',
                operatingSystem: 'Hệ điều hành',
                graphicsChip: 'Chip đồ họa',
                advanceSecurity: 'Bảo mật',
                numberOfSimSlots: 'Số khe SIM',
                battery: 'Dung lượng pin',
                connectionseries: 'Kết nối',
                color: 'Màu sắc',
                state: 'Tình trạng',
            }
            return specificationName[specificationKey];
        }

        return {
            getSpecificationTittle,
            insurance,
            setHeight,
        }
    },
}
</script>