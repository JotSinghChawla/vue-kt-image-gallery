import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList.vue'
import UploadForm from './components/UploadForm.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/api_call', component: AuthHandler },
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm }
    
  ]
})

new Vue({
  store,
  router: router,
  render: function(createElement){
    return createElement(App);
  }
}).$mount('#app')
