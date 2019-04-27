<template lang="pug">
  .content-wrapper
    .wrapper
      .auth
        .auth-banner 
          img(src="../../assets/img/mockup.png" alt="")
        .auth-form_wrapper
          .form-name
            h2 Авторизация
          form.auth-form
            input(
              type="email"
              placeholder="email"
            )
            input(
              type="text"
              placeholder="password"
            )
            button.login-button Войти


</template>

<script>
export default {
  data () {
    return {
      userOnSystem: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-wrapper
  width 100%
  height 100%
  overflow hidden
  padding-top 70px

.wrapper
  width 100%
  height 100%

.auth
  display flex
  height 80vh
  align-items center
  justify-content space-between
  padding 0 190px 0 190px

.auth-banner
  img
    height 400px

.auth-form_wrapper
  padding 20px
  border-radius 10px
  box-shadow 0 0 10px gray

.auth-form
  display flex
  flex-direction column

.form-name
  text-align center
  color #34495e

.auth-form
  input
    width 300px
    height 50px
    margin 10px 0 10px 0
    padding 0 10px 0 10px
    border-radius 5px
    border 1px solid #7f8c8d

.login-button
  margin-left auto
  height 50px
  width 100px
  font-size 18px
  color white
  background rgb(155, 89, 182)
  border-radius 7px
  border 0
  border-bottom 7px solid
  border-color #843ea1
  cursor pointer
  outline 0
  transition 0.1s

.login-button:active
  width 95px
  height 45px
  font-size 17px

</style>