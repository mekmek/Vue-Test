export default {
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