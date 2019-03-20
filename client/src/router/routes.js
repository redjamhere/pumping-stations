import Start from '@/components/pages/StartPage'
import Posts from '@/component/pages/PostsPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

export default routes
