<template>
    <div class="lg:order-last">
        <div class="text-gray-500 text-center xl:text-left xl:mt-2">Màu sắc:</div>
        <ul class="flex justify-center flex-wrap xl:justify-start">
            <li @click="selectColor(color)" v-for="(color, index) in colorsList" :key="index" :class="color.isSelectedColor ? 'border-f5-secondary' : 'border-gray-400'" class="rounded-full border-2 overflow-hidden mx-1.5 my-1 xl:p-1">
                <img class="w-12 h-12" :src="getImageUrl('/src/assets/images'+ color.url)" :alt="color.color">
            </li>
        </ul>
    </div>
</template>

<script>
import { getImageUrl } from '../../helpers';
export default {
    props: {
        colorsList: Array,
    },
    emits: ['selectColor'],
    setup(props, context) {
        function selectColor(selectedColor) {
            props.colorsList.map(color => {
                if(color.isSelectedColor) {
                    color.isSelectedColor = false;
                }
                if(selectedColor.id === color.id) {
                    color.isSelectedColor = true;
                }
                return color;
            })
            context.emit('selectColor', selectedColor);
        }
        return {
            getImageUrl,
            selectColor,
        }
    },
}
</script>