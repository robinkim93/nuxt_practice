<template>
  <div>
    <input type="text" v-model="searchKeyword" />
    <button>Search</button>
  </div>
</template>

<script setup lang="ts">
const searchKeyword = ref("");
const emits = defineEmits(["searchKeyword"]);
</script>

<style scoped></style>
