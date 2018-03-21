// 在这里import组件
import {Usbutton} from '../packages/button'

// 在这里声明组件
const components = [
  Usbutton
]

// Vue插件安装命令
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
    // 以下是服务组件
    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;
  })
}

// istanbul ignore if
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports.default = module.exports
