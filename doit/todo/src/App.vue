<template>
  <TodoHeader />
  <TodoInput @addTodo="addTodo" />
  <TodoList :todoItems="todoItems" @removeTodo="removeTodo" />
  <TodoFooter @removeAll="clearAll" />
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(newTodoItem) {
      if (newTodoItem !== "") {
        localStorage.setItem(newTodoItem, newTodoItem);
        this.todoItems.push(newTodoItem);
      }
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
  },
  created() {
    // 뷰 인스턴스가 생성되자마자 뷰 데이터에 접근할 수 있도록 created()에서 로컬스토리지 데이터를 뷰 데이터로 옮김
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
