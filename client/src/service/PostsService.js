import api from '@/service/api'

export default {
  fetchPosts () {
    return api().get('posts')
  }
}
