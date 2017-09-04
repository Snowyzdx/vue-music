import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)//使用路由

//将要配置路由用到的组件引进来

import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import UserCenter from 'components/user/user'
import SingerDetail from 'components/singer-detail/singer-detail'
import Disc from 'components/disc/disc'
import TopList from 'components/top-list/top-list'

export default new Router({
  routes:[
    {
      path:'/',
      component:Recommend
    },
    {
      path:'/recommend',
      component:Recommend,
      children:[
        {
          path:':id',
          component:Disc
        }
      ]
    },
    {
      path:'/singer',
      component:Singer,
      children: [
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path:'/rank',
      component:Rank,
      children:[
        {
          path:':id',
          component:TopList
        }
      ]
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/user',
      component:UserCenter
    }
  ]
})
