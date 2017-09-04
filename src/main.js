import 'babel-polyfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

//引入样式文件
import 'common/stylus/index.styl'

//启用fastclick
fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
    loading:require('common/image/default.png')
})
//创建App组件
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
