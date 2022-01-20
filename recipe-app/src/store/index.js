import { createStore } from "vuex";

export default createStore({
  state: {
    meals: [
      {
        slug: "pork-curry",
        title: "Pork Curry",
        place: "Home",
        star: 4,
        description: "목살 카레 맛있다 냠냠",
      },
      {
        slug: "mushroom-burger",
        title: "Mushroom Burger",
        place: "Bas Burger",
        star: 3,
        description: "버섯을 튀기다니!",
      },
    ],
  },
  mutations: {
    ADD_MEAL(state, meal) {
      state.meals.push(meal);
    },
  },
  actions: {},
  modules: {},
});
