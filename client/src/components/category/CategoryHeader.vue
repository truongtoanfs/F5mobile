<template>
    <div class="flex items-center pt-8 xl:hidden">
        <div class="bg-f5-secondary text-white py-2.5 px-3 rounded-l-md">Hỗ trợ</div>
        <div class="bg-white text-xl font-medium pl-6 py-2 rounded-r-md flex-1"><i class="fas fa-phone-alt text-base mr-1"></i> 039.6762.825</div>
    </div>
    <h1 class="text-3xl uppercase font-bold text-center pt-5 xl:text-5xl xl:text-right xl:pt-20 xl:pb-16 xl-text-shadow xl:text-white">{{ categoryList?.categoryName || categoryList?.typeName }}</h1>
    <div class="hidden xl:flex xl:items-center text-2xl">
        <div class="bg-f5-secondary text-white py-2.5 px-4 rounded-l-md"><span class="block">Bạn có</span> thắc mắc?</div>
        <div class="bg-white text-2xl font-medium pl-5 py-2.5 rounded-r-md flex-1 flex">
            <div><span class="block font-bold mr-6">Hãy liên hệ ngay</span>với Chúng tôi</div>
            <div class="flex items-center text-3xl"><i class="fas fa-phone-alt mr-3"></i> 039.6762.825</div>
        </div>
    </div>
    <div v-if="categoryList.categoryList" class="grid grid-cols-3 mt-4 bg-white pt-2 pb-5 rounded-lg xl:mt-7 xl:bg-gray-200 xl:gap-5">
        <template v-for="item in categoryList.categoryList" :key="item.id">
            <router-link :to="item.typePath" class="relative overflow-hidden group xl:flex xl:items-center xl:bg-white xl:rounded-xl xl:p-2">
                <img class="max-w-98px xl-max-w-156px mx-auto xl:mx-0" src="../../assets/images/products/iphone-11-pro-max-trang.jpg" :alt="item.typeName">
                <p class="text-sm font-medium text-center xl:text-2xl">{{ item.typeName }}</p>
                <div class="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-0 group-hover:h-sm transition-all duration-300 bg-black bg-opacity-20 xl:block"></div>
            </router-link>
        </template>
    </div>
</template>

<script>
import { getImageUrl } from '../../helpers';
export default {
    props: {
        categoryName: String,
        categoryList: Object,
    },
    setup() {
        
    }
}
</script>

<style scoped>
    .max-w-98px {
        max-width: 89px;
    }
    
    @media screen and (min-width: 1280px) {
        .xl-text-shadow {
            text-shadow: 0 3px 10px rgb(0 0 0 / 50%);
        }
        .xl-max-w-156px {
            max-width: 156px;
        }
    }
</style>