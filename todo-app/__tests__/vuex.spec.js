import { createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import todoStore from '@/store'

describe('vuexのテスト', () => {
  let localVue
  let store
  
  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(todoStore)
  })

  it('Test of dispatch ciUpdateShowStatus', () => {
    expect(store.getters.showStatus).toBe('すべて')
    store.dispatch('ciUpdateShowStatus', '完了')
    expect(store.getters.showStatus).toBe('完了')
  })
  
  it('Test of dispatch changeStatus', () => {
    expect(store.state.todos).toEqual([])
    store.commit('updateTodos', [
      { id: 0, todo: 'value', status: '作業中' }
    ])
    store.dispatch('changeStatus', 0)
    expect(store.state.todos).toEqual([
      { id: 0, todo: 'value', status: '完了' }
    ])
  })
  
  it('Test of dispatch deleteTodo', () => {
    expect(store.state.todos).toEqual([])
    store.commit('updateTodos', [
      { id: 0, todo: 'value', status: '作業中' }
    ])
    store.dispatch('deleteTodo', 0)
    expect(store.state.todos).toEqual([])
  })
  
  it('Test of dispatch addTodo', () => {
    expect(store.state.todos).toEqual([])
    store.dispatch('addTodo', 'test-todo')
    expect(store.state.todos).toEqual([
      { id: 1, todo: 'test-todo', status: '作業中' }
    ])
  })
})