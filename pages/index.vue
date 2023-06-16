<template>
    <div>
        <ProductList :productsListData="resultData" />
    </div>
</template>

<script setup lang="ts">

const { data: resultData } = await useAsyncData('products', () =>
    $fetch('http://localhost:3000/products')
)

</script>

<style scoped></style>