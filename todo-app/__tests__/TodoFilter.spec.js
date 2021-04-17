import { shallowMount } from '@vue/test-utils'
import TodoFilter from '@/components/TodoFilter.vue'

describe('TodoFilterのテスト', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(TodoFilter)
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('change-show-statusの$emitが正常に機能しているか', async () => {
    const radioInput = wrapper.find('input[type="radio"]')
    expect(radioInput.attributes().value).toBe('すべて')
    
    await wrapper.find('input[value="完了"]').setChecked()
    const emit = wrapper.emitted()
    expect(emit['change-show-status']).toBeTruthy()
    expect(emit['change-show-status'].length).toBe(1)
    expect(emit['change-show-status'][0][0]).toBe('完了')
  })
})