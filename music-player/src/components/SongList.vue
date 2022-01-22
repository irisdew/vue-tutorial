<template>
  <div v-if="!isPlayerVisible">
    <div class="text-yellow-300 font-bold text-center text-3xl mt-3 mb-7">
      VueJs Music App
    </div>
    <div
      class="flex flex-row justify-between mb-4 cursor-pointer"
      v-for="(song, index) in list"
      :key="song.id"
      @click="playSong(index)"
    >
      <div>
        <span class="text-yellow-300">{{ song.name }}</span>
        <br />
        <span class="text-gray-200 text-xs"
          >{{ song.artistName }} -
          <span class="text-gray-400"
            >{{ song.albumName }} ({{ song.year }})</span
          ></span
        >
      </div>
      <div>
        <img class="max-h-12 rounded" :src="song.src" :alt="song.name" />
      </div>
    </div>
  </div>
  <div v-if="isPlayerVisible">
    <SongPlayer
      :song="list[currentSongIndex]"
      @goback="isPlayerVisible = !isPlayerVisible"
      @next="playNext"
      @previous="playPrevious"
    />
  </div>
</template>

<script>
import SongPlayer from "@/components/SongPlayer.vue";

export default {
  name: "SongList",
  components: { SongPlayer },
  data() {
    return {
      isPlayerVisible: false,
      currentSongIndex: 0,
      list: [
        {
          id: 1,
          name: "Cheap Thrills",
          artistName: "Adam Lambert",
          albumName: "Everything",
          year: 2021,
          src: `https://source.unsplash.com/random/400x400?collections=1`,
          songSrc: `https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3`,
        },
        {
          id: 2,
          name: "Lean on",
          artistName: "Adam Levine",
          albumName: "Goind Down",
          year: 2001,
          src: `https://source.unsplash.com/random/400x400?id=5`,
          songSrc: `https://filesamples.com/samples/audio/mp3/sample3.mp3`,
        },
        {
          id: 3,
          name: "Counting Stars",
          artistName: "Adam Hart",
          albumName: "Spice It Up",
          year: 2013,
          src: `https://source.unsplash.com/random/400x400?date=10`,
          songSrc: `https://filesamples.com/samples/audio/mp3/sample1.mp3`,
        },
        // data from https://github.com/recraftrelic/vuejs-music-app/blob/master/src/components/SongList.vue
      ],
    };
  },
  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      this.isPlayerVisible = true;
    },
    playNext() {
      if (this.currentSongIndex < this.list.length - 1) {
        this.currentSongIndex += 1;
      } else {
        this.currentSongIndex = 0;
      }
    },
    playPrevious() {
      if (this.currentSongIndex != 0) {
        this.currentSongIndex -= 1;
      } else {
        this.currentSongIndex = this.list.length - 1;
      }
    },
  },
};
</script>