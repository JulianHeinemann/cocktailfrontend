import { mount } from '@vue/test-utils'
import Cocktailcreate from '@/components/Cocktailcreate'

describe('Testing Cocktailcreate.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(Cocktailcreate)

    // then
    expect(wrapper.find('#persons-create-offcanvas').classes()).not.toContain('show')
  })
})
