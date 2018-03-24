// 在这里import组件
import Button from 'packages/button/index'
import { Col, Row } from 'packages/grid/index'

// 在这里声明组件
const components = [
  Button,
  Col,
  Row
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

export default {
  version: '0.0.1',
  install,
  Button,
  Row,
  Col
}

// module.exports.default is only read
// 直接 export default ，并且要把install同时export出来，在main.js中注册，我们才能在全局通过引入 /[compoent]/index 引入组件
