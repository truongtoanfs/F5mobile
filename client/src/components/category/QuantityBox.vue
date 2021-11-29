<template>
    <div class="flex items-center text-f5-black">
        <button @click="updateAmount(-1)" :class="amount === 1 ? 'text-gray-400 bg-gray-50 hover:border-gray-200 cursor-default': 'hover:border-f5-primary'" class="border border-gray-200 h-8 px-3"><i class="fas fa-minus"></i></button>
        <input class="w-10 h-8 block border-t border-b border-gray-200 text-center font-semibold focus:outline-none" type="text" v-model.number="amount">
        <button @click="updateAmount(1)" :class="amount === 1000 ? 'text-gray-400 bg-gray-50 hover:border-gray-200 cursor-default': 'hover:border-f5-primary'" class="border border-gray-200 h-8 px-3"><i class="fas fa-plus"></i></button>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    setup() {
        let amount = ref(1);
        function updateAmount(num) {
            const nextValue = parseInt(amount.value + num);
            if(nextValue < 1 || nextValue > 1000) return;
            amount.value = nextValue;
        }
        return {
            amount,
            updateAmount,
        }
    },
}
</script>