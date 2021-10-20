<template>
    <the-header />
	<the-content />
    <the-footer />
	<scroll-top />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ScrollTop from './components/ScrollTop.vue';
import TheContent from './components/TheContent.vue';
export default {
	components: {
		TheHeader,
		TheContent,
		TheFooter,
		ScrollTop,
	},
}
</script>