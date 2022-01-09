import Cocktails from '@/views/About'
import { mount } from '@vue/test-utils'
import Cocktailcreate from '@/components/Cocktailcreate'

describe('Testing About.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Cocktails)

    // then
    expect(wrapper.text()).toMatch('Willkommen zu deiner Cocktail-Web-App')
  })

  it('should have CocktailOverview list component', () => {
    // when
    const wrapper = mount(Cocktails)

    // then
    const cardList = wrapper.findComponent(Cocktails)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have cocktail create form component', () => {
    // when
    const wrapper = mount(Cocktails)

    // then
    const createForm = wrapper.findComponent(Cocktailcreate)
    expect(createForm.exists())
  })
})
