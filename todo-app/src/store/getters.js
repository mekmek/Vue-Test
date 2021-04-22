export default {
  showStatus(state) {
    return state.showStatus
  },
  filteredTodos(state) {
    if (state.showStatus === 'すべて') {
      return state.todos
    } else {
      return state.todos.filter(todo => todo.status === state.showStatus)
    }
  }
}