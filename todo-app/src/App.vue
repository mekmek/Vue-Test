<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <TodoFilter />
    <TodoDisplay />
    <h2>新規タスクの追加</h2>
    <TodoInput />
  </div>
</template>

<script>
import TodoFilter from './components/TodoFilter.vue'
import TodoDisplay from './components/TodoDisplay.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'App',
  components: {
    TodoFilter,
    TodoDisplay,
    TodoInput
  }
}
</script>

<style>

</style>
