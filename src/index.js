// 在这里import组件
import {Ncuosbutton} from './Button/index';

// 在这里声明组件
const components = [Ncuosbutton];

// 组件库名称
const nos = { ...components
};

// Vue插件安装命令
const install = function (Vue, opts = {}) {
  // 暂时没弄清楚这条语句是什么意思
  if (install.installed) return
  Object.keys(nos).forEach(key => {
    Vue.component(key, nos[key]);
    // 在下面添加命令组件
  });
};

// istanbul ignore if
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports.default = module.exports;
