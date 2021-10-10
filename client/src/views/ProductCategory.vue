<template>
    <h1>Category {{ categoryName }}</h1>
</template>
<script>
export default {
    props: {
        categoryName: String,
    },
}
</script>