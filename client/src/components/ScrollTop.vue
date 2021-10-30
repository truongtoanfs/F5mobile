<template>
    <button @click="scrollTop" v-show="visible" class="fixed bottom-24 right-0 z-20 px-3 py-2 bg-black bg-opacity-20 hover:bg-opacity-75 transition-colors duration-500 text-white text-xl"><i class="fas fa-chevron-up"></i></button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        // show/hiden scroll button
        const visible = ref(false);
        window.addEventListener('scroll', scrollListener);
        function scrollListener() {
            visible.value = window.scrollY > 150;
        }

        function scrollTop() {
            const intervalId = setInterval(() => {
                if(window.pageYOffset === 0) {
                    clearInterval(intervalId);
                }
                window.scroll(0, pageYOffset - 60);
            }, 20)
        }

        return {
            visible,
            scrollTop,
        }
    },
}
</script>