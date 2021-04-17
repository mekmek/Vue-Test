<template>
  <div>
    <input type="text" v-model="todo" @keyup.enter="addTodo">
    <button @click="addTodo">追加</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.todo)
      this.todo = '';
    }
  }
}
</script>

<style scoped>
input {
  margin-right: 5px;
}
</style>