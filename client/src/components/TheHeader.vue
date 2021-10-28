<template>
    <header>
        <div class="flex items-center justify-between text-f5-secondary text-xl py-1.5 container xl:px-0">
           <span @click="isOpenSideNav = true" class="p-1 xl:hidden"><i class="fas fa-bars"></i></span>
            <div class="flex items-center">
                <router-link to="/">
                    <img class="h-12 mt-1 ml-4 xl:ml-0" src="../assets/images/f5_logo.jpg" alt="f5mobile logo">
                </router-link>
                <h4 class="hidden font-medium text-xl ml-4 text-gray-600 xl:block">Khách hàng là người thân</h4>
            </div>
           <div class="hidden w-420px h-9 -ml-40 border border-f5-secondary rounded-2xl px-3.5 text-f5-secondary text-base xl:flex shadow-md focus-within:shadow-secondary">
               <span class="flex items-center mr-2.5"><i class="fas fa-search"></i></span>
               <input type="text" class="w-full h-full focus:outline-none placeholder-f5-secondary" placeholder="Tìm kiếm...">
           </div>
           <div class="xl:text-3xl">
               <button @click="isOpenSearchBox = true" class="p-1 xl:hidden"><i class="fas fa-search"></i></button>
               <router-link to="/cart" class="p-1 relative">
                   <i class="fas fa-shopping-cart"></i>
                   <span class="absolute -top-1.5 left-4 text-white bg-red-500 text-sm px-1 h-5 rounded-full xl:left-3/4 xl:-top-0.5">0</span>
               </router-link>
               <div v-if="isOpenSearchBox" class="fixed inset-0 overlay">
                   <div @clickout="isOpenSearchBox = false" class="bg-gray-100 text-gray-600 flex items-center text-lg py-1">
                       <button @click="isOpenSearchBox = false" class="px-3 py-1"><i class="fas fa-arrow-left"></i></button>
                       <div class="flex-1 flex items-center">
                           <input v-focus type="text" class="w-full px-1 focus:outline-none border-b-2 border-gray-500 bg-transparent placeholder-current" placeholder="Tìm kiếm sản phẩm">
                           <button class="px-3 py-1"><i class="fas fa-times"></i></button>
                       </div>
                       <button class="px-3 py-1"><i class="fas fa-search"></i></button>
                   </div>
               </div>
           </div>
        </div>
        <div @click="isOpenSideNav = false" v-if="isOpenSideNav" class="overlay"></div>
        <nav :class="isOpenSideNav ? 'block' : 'hidden'" class="fixed inset-y-0 left-0 overflow-y-auto z-50 w-72 bg-white text-f5-black xl:static xl:overflow-visible xl:block xl:w-full xl:bg-f5-primary xl:text-white">
            <div class="container px-0 xl:px-2 h-full">
                <div class="flex items-center justify-between bg-f5-primary px-1 xl:hidden">
                    <router-link to="/">
                        <img class="h-7" src="../assets/images/f5_logo_03.png" alt="logo f5">
                    </router-link>
                    <span @click="isOpenSideNav = false" class="text-white p-2 text-xl"><i class="fas fa-times"></i></span>
                </div>
                <ul class="mx-1 xl:flex xl:mx-0 xl:relative">
                    <li v-for="nav in navList" :key="nav.id" class="border-b border-grey-300 group xl:border-0 xl:px-1 xl:first:pl-0">
                        <div class="flex justify-between items-center xl:group-hover:bg-white xl:group-hover:text-f5-black">
                            <router-link :to="nav.categoryPath" class="uppercase font-medium pt-2.5 pb-2 pl-2 xl:px-2 xl:font-normal">{{ nav.categoryName }}</router-link>
                            <button @click="openlinksList(nav.id)" v-if="nav.categoryList" class="py-1 px-3 shadow bg-gray-50 xl:hidden"><i class="fas fa-chevron-down"></i></button>
                        </div>
                        <ul v-if="nav.categoryList" :class="isOpenNavChildList === nav.id ? 'block' : 'hidden'" class="pl-6 pb-1 xl:absolute xl:z-50 xl:inset-x-0 xl:top-full xl:group-hover:flex xl:bg-f5-primary xl:rounded-b-lg xl:py-3">
                            <li v-for="childNav in nav.categoryList" :key="childNav.id" class="xl:pr-40">
                                <router-link :to="childNav.seriesPath" class="py-1 inline-block xl:text-lg xl:uppercase xl:font-medium xl:hover:text-black">{{ childNav.seriesName }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { navList } from '../data/initialData';
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const toggleState = reactive({
            isOpenSideNav: false,
            isOpenNavChildList: -1,//state close = -1
            isOpenSearchBox: false,
        })

        function openlinksList(id) {
            if(toggleState.isOpenNavChildList === id) {
                toggleState.isOpenNavChildList = -1;
            } else {
               toggleState.isOpenNavChildList = id;
            }
        }

        return {
            navList,
            ...toRefs(toggleState),
            openlinksList,
        }
    },
}
</script>

<style scoped>
    .w-420px {
        width: 420px;
    }
</style>
