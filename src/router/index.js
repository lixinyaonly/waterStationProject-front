import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ClientInfo from '@/components/clientInfo/TableClientInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/clientInfo',
      name: 'clientInfo',
      component: ClientInfo
    }
  ]
})
