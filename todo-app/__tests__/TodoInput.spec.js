import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput.vue'

describe('TodoInputのテスト', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(TodoInput)
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('add-todoの$emitが正常に機能しているか', () => {
    wrapper.find('input').setValue('myTodo')
    wrapper.find('button').trigger('click')
    const emit = wrapper.emitted()
    
    expect(emit['add-todo']).toBeTruthy()
    expect(emit['add-todo'].length).toBe(1)
    expect(emit['add-todo'][0][0]).toBe('myTodo')
  })
})