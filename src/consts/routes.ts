import BlogList from '../views/list/list'
import PostBlog from '../views/blog/post/post'
import BlogInfo from '../views/blog/info'


export const routes = [{
    key: '首页',
    path: '/app/index',
    component: BlogList 
},{
    key: '发布博客',
    path: '/app/blog/post',
    component: PostBlog
},{
    key: '博客详情',
    path: '/app/blog/info',
    component: BlogInfo
}]