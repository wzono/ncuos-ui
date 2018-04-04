// 引入Font Awesome
import 'font-awesome/css/font-awesome.min.css'

// 在这里import组件
import Button from 'packages/button/index'
import { Col, Row } from 'packages/grid/index'
import Notification from 'packages/notification/index'
import Modal from 'packages/modal/index'
import Message from 'packages/message/index'
import Tooltip from 'packages/tooltip/index'

// 在这里声明组件
const components = [
  Modal,
  Button,
  Col,
  Row,
  Tooltip
]

// Vue插件安装命令
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  // 以下是服务组件
  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$message = Message
  Vue.prototype.$notification = Notification
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
