import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopAll from '../views/ShopAll.vue'
import BestSellers from '../views/BestSellers.vue'
import MenCategory from '../views/MenCategory.vue'
import WomenCategory from '../views/WomenCategory.vue'
import NewCategory from '../views/NewCategory.vue'
import LoginSignUp from '../views/LoginSignUp.vue'
import WishList from '../views/WishList.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/ShopAll',
    name:'ShopAll',
    component:ShopAll
  },
  {
    path:'/BestSellers',
    name:'BestSellers',
    component:BestSellers
  },
  {
    path:'/MenCategory',
    name:'MenCategory',
    component:MenCategory
  },
  {
    path:'/WomenCategory',
    name:'WomenCategory',
    component:WomenCategory
  },
  {
    path:'/NewCategory',
    name:'NewCategory',
    component:NewCategory
  },
  {
    path:'/LoginSignUp',
    name:'LoginSignUp',
    component:LoginSignUp
  },
  {
    path:'/WishList',
    name:'WishList',
    component:WishList
  }, 
  {
    path:'/CartPage',
    name:'CartPage',
    component:CartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
