<template>
    <div class="buttons">
      <button @click="$store.commit('decrease')">-</button>
      <button @click="$store.commit('increaseOne')">+</button>
  </div>
  <div>
    <button @click="$store.dispatch('getRandom')">randomly increase</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>