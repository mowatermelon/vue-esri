import Vue from 'vue'
import Hello from '@/pages/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p.alert-success').textContent)
      .to.equal('\n    由西瓜酱提供包含三种颜色主题的vue后台操作模板\n  ')
  })
})
