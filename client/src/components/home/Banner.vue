<template>
    <div class="container px-2 xl:flex">
        <div class="glide-banner-left w-banner-left pr-2 relative group">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerLeft_1.jpg" alt="banner f5mobile">
                    </li>
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerLeft_2.jpg" alt="banner f5mobile">
                    </li>
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerLeft_3.jpg" alt="banner f5mobile">
                    </li>
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerLeft_4.jpg" alt="banner f5mobile">
                    </li>
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left px-3.5 py-0.5 rounded bg-gray-300 bg-opacity-10 group-hover:bg-opacity-100 text-gray-600 hover:bg-opacity-50 hover:text-white transition-all absolute top-1/2 transform -translate-y-1/2 left-0 ml-4" data-glide-dir="<"><i class="fas fa-chevron-left"></i></button>
                <button class="glide__arrow glide__arrow--right px-3.5 py-0.5 rounded bg-gray-300 bg-opacity-10 group-hover:bg-opacity-100 text-gray-600 hover:bg-opacity-50 hover:text-white transition-all absolute top-1/2 transform -translate-y-1/2 right-0 mr-4" data-glide-dir=">"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="glide-banner-right w-banner-right pl-2 hidden xl:block">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerRight_1.jpg" alt="banner f5mobile">
                    </li>
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerRight_2.jpg" alt="banner f5mobile">
                    </li>
                    <li class="glide__slide">
                        <img class="banner-img" src="../../assets/images/bannerRight_3.jpg" alt="banner f5mobile">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Glide from '@glidejs/glide';
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        onMounted(() => {
            new Glide('.glide-banner-left', {
                type: 'carousel',
                startAt: 0,
                autoplay: 6000,
                animationDuration: 1000,
            }).mount();
            new Glide('.glide-banner-right', {
                type: 'carousel',
                startAt: 0,
                autoplay: 5000,
                animationDuration: 600,
            }).mount();
        })
    },
}
</script>

<style scoped>
    .banner-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .w-banner-left {
        width: 100%;
    }
    .w-banner-right {
        width: 345px;
    }
    @media screen and (min-width: 1280px)  {
        .w-banner-left {
            width: calc(100% - 345px);
        }
    }
</style>