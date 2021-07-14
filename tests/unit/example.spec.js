import { mount } from '@vue/test-utils'
import Footer from '@/components/MyFooter.vue'

describe('MyFooter.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toContain('Find me on:')
  })
})
