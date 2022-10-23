<template>
  <the-header />
  <div class="bg-gray-200">
    <router-view></router-view>
  </div>
  <the-footer />
  <scroll-top />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ScrollTop from './components/ScrollTop.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
    ScrollTop,
  },
}
</script>
