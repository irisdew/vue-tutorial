<template>
  <div class="home">
    <h1>오늘의 냠냠</h1>
    <button @click="togglePopup">➕ 오늘 먹은 것</button>
    <div class="recipes">
      <div class="card" v-for="meal in $store.state.meals" :key="meal.slug">
        <h2>
          {{ meal.title }}
        </h2>
        <p>{{ meal.description }}</p>
        <router-link :to="`/meal/${meal.slug}`">
          <button>자세히 보기</button>
        </router-link>
      </div>
    </div>

    <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2>오늘 먹은 것 추가</h2>

        <form @submit.prevent="">
          <div class="group">
            <label>메뉴 이름</label>
            <input type="text" v-model="newMeal.title" />
          </div>

          <div class="group">
            <label>식당 이름</label>
            <input type="text" v-model="newMeal.place" />
          </div>

          <div class="group">
            <label>별점</label>
            <div><span v-for="i in newMeal.star" :key="i">⭐</span></div>
            <button @click="subtrackStar">-</button>
            <input type="number" v-model="newMeal.star" />
            <button @click="addStar">+</button>
          </div>

          <!-- <div class="group">
            <label>사진</label>
            <input type="file" />
          </div> -->

          <div class="group">
            <label>설명</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="newMeal.description"
            ></textarea>
          </div>

          <button type="submit" @click="addNewMeal">추가</button>
          <button type="button" @click="togglePopup">취소</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const newMeal = ref({
      title: "",
      place: "",
      star: 0,
      description: "",
    });

    const store = useStore();

    const popupOpen = ref(false);

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };

    const addStar = () => {
      newMeal.value.star++;
    };

    const subtrackStar = () => {
      newMeal.value.star--;
    };

    const addNewMeal = () => {
      newMeal.value.slug = newMeal.value.title
        .toLowerCase()
        .replace(/\s/g, "-");

      if (newMeal.value.slug === "") {
        alert("메뉴 이름을 입력해주세요!");
        return;
      }

      store.commit("ADD_MEAL", { ...newMeal.value });

      // 초기화
      newMeal.value = {
        title: "",
        place: "",
        star: 0,
        description: "",
      };

      togglePopup();
    };

    return {
      newMeal,
      popupOpen,
      togglePopup,
      addStar,
      subtrackStar,
      addNewMeal,
    };
  },
};
</script>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}
.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.add-recipe-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
