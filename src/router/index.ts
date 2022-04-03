import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue';
import Article from '@/views/article/index.vue';
import ArticleEdit from '@/views/article/EditArticle.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/article/list',
  },
  {
    path: '/article',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'ArticleList',
        component: Article,
      },
      {
        path: 'edit',
        name: 'ArticleEdit',
        component: ArticleEdit,
      }
    ]    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
