<template>
    <div class="mb-1 xl:flex banner">
        <div class="w-banner-left pr-2 relative group">
            <swiper :modules="modules" navigation loop :autoplay='{ "delay": 3000, "disableOnInteraction": false }'>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerLeft_1.jpg" alt="banner f5mobile">
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerLeft_2.jpg" alt="banner f5mobile">
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerLeft_3.jpg" alt="banner f5mobile">
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerLeft_4.jpg" alt="banner f5mobile">
                </swiper-slide>
            </swiper>
        </div>
        <div class="w-banner-right pl-2 hidden xl:block">
            <swiper :modules="modules" loop :autoplay='{ "delay": 2600, "disableOnInteraction": false }'>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerRight_1.jpg" alt="banner f5mobile">
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerRight_2.jpg" alt="banner f5mobile">
                </swiper-slide>
                <swiper-slide>
                    <img class="banner-img" src="../../assets/images/bannerRight_3.jpg" alt="banner f5mobile">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        return {
            modules: [Navigation, Autoplay],
        }
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

<style>
    /* style to custom arror swiper */
    .banner .swiper-button-next:after, .banner .swiper-button-prev:after {
        --swiper-navigation-size: 30px;
    }
    .banner .swiper-button-prev, .banner .swiper-button-next {
        @apply px-4 py-0.5 rounded bg-gray-300 bg-opacity-10 group-hover:bg-opacity-100 text-gray-600 hover:bg-opacity-50 hover:text-white;
    }
</style>