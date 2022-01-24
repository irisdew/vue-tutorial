<template>
  <section>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">{{ todoItem }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
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
</style>