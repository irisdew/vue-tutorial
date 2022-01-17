<template>
  <h1>Products</h1>

  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard 
          v-for="(product, index) in inventory"
          :key="product.id"
          class="card"
          :product="product"
          :index="index"
          :addToCart="addToCart"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  props: ["inventory", "addToCart"],
  components: {
    ProductCard,
  },
};
</script>