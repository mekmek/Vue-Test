export default {
  updateShowStatus(state, value) {
    state.showStatus = value
  },
  updateTodos(state, arr) {
    state.todos = arr
  },
  updateId(state, value) {
    state.id = value
  }
}