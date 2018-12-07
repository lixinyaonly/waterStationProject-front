import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ClientInfo from '@/components/clientInfo/TableClientInfo'
import AddClient from '@/components/clientInfo/TableClientEdit'
import Strombestellung from '@/components/orderManage/Strombestellung'
import StaffInfo from '@/components/employeeManage/staffInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/clientManage/clientInfo',
      name: 'clientInfo',
      component: ClientInfo
    },{
      path: '/clientManage/addClient',
      name: 'AddClient',
      component: AddClient
    },{
      path: '/orderManage/Strombestellung',
      name: 'Strombestellung',
      component: Strombestellung
    },{
      path: '/employeeManage/staffInfo',
      name: 'StaffInfo',
      component: StaffInfo
    }
  ]
})
