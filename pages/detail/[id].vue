<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="productInfo.imageUrl"
          :alt="productInfo.name"
        />
      </div>
      <div class="side-panel">
        <p>{{ productInfo.name }}</p>
        <p>{{ productInfo.price }}</p>
        <!-- <button type="button">Add to Cart</button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProductById } from "@/api/index";
const route = useRoute();
const productId = route.params.id;

const { data: productInfo } = useAsyncData(
  "product",
  async () => await getProductById(productId)
);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
