<template>
  <div class="container mx-auto">
    <category-header-contact />
    <p class="py-3 text-lg text-center xl:hidden"><b>"{{ query }}"</b> Có 110 sản phẩm</p>
  </div>
</template>
<script>
import CategoryHeaderContact from '@/components/category/CategoryHeaderContact.vue';


export default {
  name: 'SearchPage',
  props: {
    query: {
      type: String,
      default: '',
    }
  },
  components: {
    CategoryHeaderContact,
  },
  setup(props) {
    console.log('query:', props.query);
  }
}
</script>
