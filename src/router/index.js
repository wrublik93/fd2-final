import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('../views/Home');
const MainPage = () => import('../views/MainPage');


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: MainPage,
        },
      ]
    }
  ]
})
