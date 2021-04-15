import { shallowMount } from '@vue/test-utils'
import TodoDisplay from '@/components/TodoDisplay.vue'

describe('TodoDisplayのテスト', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(TodoDisplay)
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('change-statusの$emitが正常に機能しているか', async () => {
    await wrapper.setProps({ todos: [{ todo: 'myTodo', status: '作業中' }]})
    await wrapper.find('#change-status-0').trigger('click')
    const emit = wrapper.emitted()
    
    expect(emit['change-status']).toBeTruthy()
    expect(emit['change-status'].length).toBe(1)
    expect(emit['change-status'][0][0]).toBe(0)
  })
  
  it('delete-todoの$emitが正常に機能しているか', async () => {
    await wrapper.setProps({ todos: [{ todo: 'myTodo', status: '作業中' }]})
    await wrapper.find('#delete-todo-0').trigger('click')
    const emit = wrapper.emitted()
    
    expect(emit['delete-todo']).toBeTruthy()
    expect(emit['delete-todo'].length).toBe(1)
    expect(emit['delete-todo'][0][0]).toBe(0)
  })
})