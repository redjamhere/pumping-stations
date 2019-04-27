<template lang='pug'>
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            .navbar-list_wrapper(
              :class="{active: menuShow}"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                )
                  router-link.navbar-link(
                    :to="`${link.url}`"
                  ) {{link.title}}
            .button-burger(@click="menuShow = !menuShow" :class="{active: menuShow}")
              span.line.line-1
              span.line.line-2
              span.line.line-3
            router-link.profile-logo(to='/login')
              font-awesome-icon(icon="user")
            router-link.header-logo(to='/home') Карманный расчет
    .content-wrapper
      router-view
    .footer
      span {{authorName}}
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authorName: 'Курсовую работу выполнил Займанов Айнур ИС-162',
      menuShow: false,
      linkMenu: [
        {title: 'Главная', url: '/'},
        {title: 'Расчеты', url: '/calculate'},
        {title: 'Документация', url: '/doc'},
        {title: 'Об авторе', url: '/about'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
@import './assets/style/main.styl'
</style>
