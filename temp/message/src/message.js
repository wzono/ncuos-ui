import Vue from 'vue'
import Message from './message.vue'

let MessageBox = Vue.extend(Message)
let instance
var message = options => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  //生成组件
  instance = new MessageBox({
    data: options
  })
  //组件需要挂载在dom元素上
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

const type = ['default', 'success', 'info', 'warning', 'error']
type.forEach(type => {
  message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return message(options)
  }
})

export default message