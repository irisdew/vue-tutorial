<template>
  <div class="text-white">
    <div class="flex flex-row justify-between" @click="goback">
      <button>Back</button>
      <div class="text-yellow-300 font-bold text-center text-1xl">
        VueJs Music App
      </div>
    </div>
    <div>
      <img class="rounded mt-8 mb-4" :src="song.src" />
      <div class="text-center">
        <p class="text-yellow-300 font-bold">{{ song.name }}</p>
        <p class="text-gray-200">
          {{ song.artistName }} - {{ song.albumName }}
        </p>
        <p class="text-gray-400">{{ song.year }}</p>
      </div>
      <div class="grid grid-cols-3 mt-10">
        <div class="flex items-center justify-center" @click="previous">
          <button>Previous</button>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold"
          >
            Play
          </button>
        </div>
        <div class="flex items-center justify-center" @click="next">
          <button>Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      id: Number,
      name: String,
      articstName: String,
      albumName: String,
      year: Number,
      src: String,
      songSrc: String,
    },
  },
  emits: ["goback", "next", "previous"],
  methods: {
    goback() {
      this.$emit("goback");
    },
    next() {
      this.$emit("next");
    },
    previous() {
      this.$emit("previous");
    },
  },
};
</script>