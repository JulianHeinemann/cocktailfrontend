import Cocktails from '@/views/About'
import { mount } from '@vue/test-utils'
import Cocktailcreate from '@/components/Cocktailcreate'

describe('Testing About.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Cocktails)

    // then
    expect(wrapper.text()).toMatch('Hey, Wir Sind Cocktail-App  Zusammen Machen Wir Cocktails Nicht Nur Lecker Sondern Auch Einfach  Cocktails mixen, das macht Spaß. Es macht einfach gute Laune ein bisschen rum zu tüfteln, Zutaten miteinander zu vermischen und im kleinen Kreis einen gut aussehenden Cocktail herzustellen. Natürlich macht es dann noch viel bessere Laune diesen gemeinsam zu verköstigen.Und genau dieser Spaß soll eben bleiben. Cocktail mixen soll zu einer unkomplizierten Geschichte werden, bei der sich der Kunde ab jetzt ganz auf die gute Laune konzentrieren kann.  Wir glauben es gibt bereits viele Menschen, die sehr gerne einen Abend auf diese Weise ausschmücken würden, aber zur endgültigen Umsetzung kommt es dann doch sehr selten. Das liegt daran, dass man im Alltag dann gar keine Zeit findet, um erst einmal ein ordentliches Rezept zu suchen, alle Zutaten einzukaufen und das richtige Zubehör zu finden.  Deswegen gibt es nun eine Internetseite, die einfach und unkompliziert aufgebaut ist, auf der ich mir meinen Lieblingscocktail aussuche und bequem ein großes Paket nach Hause geschickt bekomme. Hier ist alles enthalten, was ich benötigen könnte und mein Cocktailabend ist komplett vorbereitet.')
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
