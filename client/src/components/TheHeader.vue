<template>
    <header>
        <div class="flex items-center justify-between text-f5-secondary text-xl px-2 py-1.5 container xl:px-0">
           <span @click="isOpenSideNav = true" class="p-1 xl:hidden"><i class="fas fa-bars"></i></span>
            <div class="flex items-center">
                <a href="/">
                    <img class="h-12 mt-1 ml-4 xl:ml-0" src="../assets/images/f5_logo.jpg" alt="f5mobile logo">
                </a>
                <h4 class="hidden font-medium text-xl ml-4 text-gray-600 xl:block">Khách hàng là người thân</h4>
            </div>
           <div class="hidden w-420px h-9 -ml-40 border border-f5-secondary rounded-2xl px-3.5 text-f5-secondary text-base xl:flex shadow-md focus-within:shadow-secondary">
               <span class="flex items-center mr-2.5"><i class="fas fa-search"></i></span>
               <input type="text" class="w-full h-full focus:outline-none placeholder-f5-secondary" placeholder="Tìm kiếm...">
           </div>
           <div class="xl:text-3xl">
               <span class="p-1 xl:hidden"><i class="fas fa-search"></i></span>
               <a href="/cart" class="p-1 relative">
                   <i class="fas fa-shopping-cart"></i>
                   <span class="absolute -top-1.5 left-4 text-white bg-red-500 text-sm px-1 h-5 rounded-full xl:left-3/4 xl:-top-0.5">0</span>
               </a>
           </div>
        </div>
        <div @click="isOpenSideNav = false" v-if="isOpenSideNav" class="overlay"></div>
        <nav :class="isOpenSideNav ? 'block' : 'hidden'" class="fixed inset-y-0 left-0 overflow-y-auto z-50 w-72 bg-white text-f5-black xl:static xl:overflow-visible xl:block xl:w-full xl:bg-f5-primary xl:text-white">
            <div class="container h-full">
                <div class="flex items-center justify-between bg-f5-primary px-1 xl:hidden">
                    <a href="#">
                        <img class="h-7" src="../assets/images/f5_logo_03.png" alt="">
                    </a>
                    <span @click="isOpenSideNav = false" class="text-white p-2 text-xl"><i class="fas fa-times"></i></span>
                </div>
                <ul class="mx-1 xl:flex xl:mx-0 xl:relative">
                    <li v-for="nav in navList" :key="nav.id" class="border-b border-grey-300 group xl:border-0 xl:px-1 xl:first:pl-0">
                        <div class="flex justify-between items-center xl:group-hover:bg-white xl:group-hover:text-f5-black">
                            <a :href="nav.path" class="uppercase font-medium pt-2.5 pb-2 pl-2 xl:px-2 xl:font-normal">{{ nav.linkName }}</a>
                            <button @click="openlinksList(nav.id)" v-if="nav.linksList" class="py-1 px-3 shadow bg-gray-50 xl:hidden"><i class="fas fa-chevron-down"></i></button>
                        </div>
                        <ul v-if="nav.linksList" :class="isOpenNavChildList === nav.id ? 'block' : 'hidden'" class="pl-6 pb-1 xl:absolute xl:inset-x-0 xl:top-full xl:group-hover:flex xl:bg-f5-primary xl:rounded-b-lg xl:py-3">
                            <li v-for="childNav in nav.linksList" :key="childNav.id" class="xl:pr-40">
                                <a class="py-1 inline-block xl:text-lg xl:uppercase xl:font-medium xl:hover:text-black" :href="childNav.path">{{ childNav.linkName }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
const navList = [
    {
        id: 1,
        linkName: '12/ 12mini/ 12promax',
        path: '/12-12mini-12promax',
        linksList: [
            {
                id: 1,
                linkName: 'iphone 12',
                path: '/iphone-12',
            },
            {
                id: 2,
                linkName: 'iphone 12 mini',
                path: '/iphone-12-mini',
            },
            {
                id: 3,
                linkName: 'iphone 12 pro',
                path: '/iphone-12-pro',
            },
            {
                id: 4,
                linkName: 'iphone 12 pro max',
                path: '/iphone-12-pro-max',
            },

        ]
    },
    {
        id: 2,
        linkName: '11/ 11pro/ 11promax',
        path: '/11-11pro-11promax',
        linksList: [
            {
                id: 1,
                linkName: 'iphone 11',
                path: '/iphone-11',
            },
            {
                id: 2,
                linkName: 'iphone 11 pro',
                path: '/iphone-11-pro',
            },
            {
                id: 3,
                linkName: 'iphone 11 promax',
                path: '/iphone-11-pro-max',
            },
        ]
    },
    {
        id: 3,
        linkName: 'x/ xs/ xsmax/ xr',
        path: '/x-xs-xsmax-xr',
        linksList: [
            {
                id: 1,
                linkName: 'iphone x',
                path: '/iphone-x',
            },
            {
                id: 2,
                linkName: 'iphone xs',
                path: '/iphone-xs',
            },
            {
                id: 3,
                linkName: 'iphone xs max',
                path: '/iphone-xs-max',
            },
            {
                id: 4,
                linkName: 'iphone xr',
                path: '/iphone-xr',
            },
        ]
    },
    {
        id: 4,
        linkName: '8/ 8plus',
        path: '/8-8plus',
        linksList: [
            {
                id: 1,
                linkName: 'iphone 8',
                path: '/iphone-8',
            },
            {
                id: 2,
                linkName: 'iphone 8 plus',
                path: '/iphone-8plus',
            },
        ]
    },
    {
        id: 5,
        linkName: '7/ 7plus',
        path: '/7-7plus',
        linksList: [
            {
                id: 1,
                linkName: 'iphone 7',
                path: '/iphone-7',
            },
            {
                id: 2,
                linkName: 'iphone 7 plus',
                path: '/iphone-7plus',
            },
        ]
    },
    {
        id: 6,
        linkName: '6/ 6s/6s plus',
        path: '/6-6s-6s-plus',
        linksList: [
            {
                id: 1,
                linkName: 'iphone 6',
                path: '/iphone-6',
            },
            {
                id: 2,
                linkName: 'iphone 6s',
                path: '/iphone-6s',
            },
            {
                id: 3,
                linkName: 'iphone 6 plus',
                path: '/iphone-6plus',
            },
            {
                id: 4,
                linkName: 'iphone 6s plus',
                path: '/iphone-6s-plus',
            },
            
        ]
    },
    {
        id: 7,
        linkName: 'ipad',
        path: '/ipad',
        linksList: [
            {
                id: 1,
                linkName: 'ipad air',
                path: '/ipad-air',
            },
            {
                id: 2,
                linkName: 'ipad mini 3/4/5',
                path: '/ipad-mini-3-4-5',
            },
            {
                id: 4,
                linkName: 'ipad pro',
                path: '/ipad-pro',
            },
            {
                id: 5,
                linkName: 'ipad gen 5/6/7/8',
                path: '/ipad-gen-5-6-7-8',
            },
            
        ]
    },
    {
        id: 8,
        linkName: 'apple watch',
        path: '/apple watch',
    },
    {
        id: 9,
        linkName: 'airpods/ phụ kiện',
        path: '/airpods-phụ kiện',
    },
    {
        id: 9,
        linkName: 'liên hệ',
        path: '/lienhe',
    },
];
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const toggleState = reactive({
            isOpenSideNav: false,
            isOpenNavChildList: -1,//sate close = -1
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