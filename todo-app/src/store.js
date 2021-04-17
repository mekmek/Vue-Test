import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showStatus: 'すべて',
    todos: [],
    id: 0
  },
  mutations: {
    updateShowStatus(state, value) {
      state.showStatus = value
    },
    updateTodos(state, arr) {
      state.todos = arr
    },
    updateId(state, value) {
      state.id = value
    }
  },
  getters: {
    showState(state) {
      return state.showStatus
    },
    filteredTodos(state) {
      if (state.showStatus === 'すべて') {
        return state.todos
      } else {
        return state.todos.filter(todo => todo.status === state.showStatus)
      }
    }
  },
  actions: {
    ciUpdateShowStatus(context, value) {
      context.commit('updateShowStatus', value)
    },
    changeStatus(context, id) {
      const todos = context.state.todos
      let index
      todos.some((todo, i) => {  
        if (todo.id === id) {
          index = i
          return true
        }
      })
      todos[index].status = todos[index].status === '作業中' ? '完了' : '作業中'
      context.commit('updateTodos', todos)
    },
    deleteTodo(context, id) {
      const todos = context.state.todos
      let index
      todos.some((todo, i) => {  
        if (todo.id === id) {
          index = i
          return true
        }
      })
      todos.splice(index, 1)
      context.commit('updateTodos', todos)
    },
    addTodo(context, value) {
      const id = context.state.id + 1
      const todos = context.state.todos
      todos.push({ id: id, todo: value, status: '作業中' })
      context.commit('updateId', id)
      context.commit('updateTodos', todos)
    }
  }
})