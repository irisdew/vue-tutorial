<template>
  <input type="text" v-model="newTodoItem" />
  <button @click="addTodo">ADD</button>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
    },
  },
};
</script>

<style>
</style>