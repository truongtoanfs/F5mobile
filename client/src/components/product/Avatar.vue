<template>
    <div class="xl:flex-1">
        <div class="lg:mt-4">
            <img class="w-4/5 h-4/5 max-w-lg mx-auto" :src="getImageUrl('/src/assets/images'+ imageProduct)" alt="iphone-11-den">
        </div>
        <div class="hidden xl:flex xl:justify-center">
            <a class="px-7 py-1.5 text-center rounded text-white bg-facebook-color mr-1" href="https://www.facebook.com/sharer/sharer.php?u=https://f5mobile.vn/iphone-11-lock-64gb-likenew-9999-p25607168.html"><i class="fab fa-facebook-f mr-1"></i>Share</a>
            <a class="px-7 py-1.5 text-center rounded text-white bg-twiter-color mr-1" href="https://twitter.com/intent/tweet?&url=https://f5mobile.vn/iphone-11-lock-64gb-likenew-9999-p25607168.html"><i class="fab fa-twitter mr-1"></i>Tweet</a>
            <a class="px-7 py-1.5 text-center rounded text-white bg-google-plus-color" href="https://plus.google.com/share?url=https://f5mobile.vn/iphone-11-lock-64gb-likenew-9999-p25607168.html"><i class="fab fa-google-plus-g mr-1"></i>Plus</a>
        </div>
    </div>
</template>
<script>
import { getImageUrl } from '../../helpers';
export default {
    props: {
      imageProduct: String,
    },
    setup(props) {
      return {
        getImageUrl,
      }
    },
}
</script>

<style scoped>
.bg-facebook-color {
    background: #3a5899;
}
.bg-facebook-color:hover {
    background: #1d418d;
}
.bg-twiter-color {
    background: #00acee;
}
.bg-twiter-color:hover {
    background: #0b93c7;
}
.bg-google-plus-color {
    background: #db4437;
}
.bg-google-plus-color:hover {
    background: #bb2a1d;
}
</style>
