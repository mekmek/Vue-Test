<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <TodoFilter @change-show-status="changeShowStatus"></TodoFilter>
    
    <TodoDisplay
      :todos=todos
      :showStatus=showStatus
      @change-status="changeStatus" 
      @delete-todo="deleteTodo">
    </TodoDisplay>
    
    <h2>新規タスクの追加</h2>
    <TodoInput @add-todo="addTodo"></TodoInput>
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
    TodoInput,
  },
  data() {
    return {
      todos: [],
      showStatus: 'すべて'
    }
  },
  methods: {
    changeStatus(e) {
      this.todos[e].status = this.todos[e].status === '作業中' ? '完了' : '作業中';
    },
    deleteTodo(e) {
      this.todos.splice(e, 1);
    },
    addTodo(e) {
      this.todos.push({ todo: e, status: '作業中' });
    },
    changeShowStatus(e) {
      this.showStatus = e;
    }
  }
}
</script>

<style>

</style>
