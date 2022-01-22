<template>
  <div class="app-container p-3 bg-black m-auto">
    <SongList />
  </div>
</template>

<script>
import SongList from "@/components/SongList.vue";

export default {
  name: "App",
  components: {
    SongList,
  },
};
</script>

<style>
.app-container {
  width: 350px;
  height: 700px;
}
</style>
