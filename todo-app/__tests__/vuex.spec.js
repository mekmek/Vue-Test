import { createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import cloneDeep from 'lodash.clonedeep'

describe('vuexのテスト', () => {
  let localVue
  let store
  
  const state = {
    showStatus: 'すべて',
    todos: [],
    id: 0
  }

  const initStore = () => {
    return cloneDeep({
      state,
      getters,
      actions,
      mutations
    })
  }

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    // console.log(todoStore)
    // console.log(cloneDeep(todoStore))
    store = new Vuex.Store(initStore())
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