import Vue from 'vue'
import Router from 'vue-router'
import indexMain from '@/components/indexMain'
import about from '@/components/about/index'
import MicroLanguageIndex from '@/components/MicroLanguage/index'
import leacots from '@/components/leacots/index'
import album from '@/components/album/index'
import detail from '@/components/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexMain',
      component: indexMain
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/MicroLanguage',
      component: MicroLanguageIndex
    },
    {
      path: '/leacots',
      component: leacots
    },
    {
      path: '/album',
      component: album
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})
