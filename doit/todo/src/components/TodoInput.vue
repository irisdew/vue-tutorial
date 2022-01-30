<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="Things I have to do..."
      ref="inputBox"
      @keypress.enter="addTodo"
    />
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="closeModal">
      <template v-slot:header>경고</template>
      <template v-slot:footer @click="closeModal"
        >할 일을 입력하세요.
        <i
          class="closeModalBtn fas fa-times"
          aria-hidden="true"
          @click="closeModal"
        ></i>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        this.showModal = true;
        this.$refs.inputBox.blur();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 7px;
}
.inputBox input {
  width: 80%;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right top, #f0b6d3, #ee94a8);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>