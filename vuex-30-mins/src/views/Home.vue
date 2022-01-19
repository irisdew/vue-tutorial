<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div :style="{ color: $store.state.colorCode }" class="counter">{{ $store.state.counter }}</div>
    <div class="counter-squared">{{ $store.state.counter }}
      <sup>2</sup>= 
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.commit('decrease')">-</button>
      <button @click="$store.commit('increaseOne')">+</button>
    </div>
    <div>
      <button @click="$store.dispatch('getRandom')">randomly increase</button>
    </div>
    <div>
      <input v-model="colorCode" type="text" placeholder="Enter color code" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed : {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
  background: lightgreen;
}
</style>
