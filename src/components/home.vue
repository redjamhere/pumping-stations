<template lang="pug">
  .content-wrapper
    .header-content
      .header-content_warp
        .coursename
          h1
            p.big-text РАССТАНОВКА
            p.small-text НАСОСНЫХ СТАНЦИЙ
            p.small-text И ПУНКТОВ ПОДОГРЕВА
        router-link.start-button(to="/calculate") Начать работу
        .mobile-bg
    .text-wrapper
      .theme
        h1 О проекте
      .text-container
        .text-block
          p.left-text Данный курсовой проект выполнен в соответствии с заданием на курсовое проектирование. Темой курсового проекта является «Разработка информационной системы по расстановке насосных станций и пунктов подогрева при «горячей» перекачке».
          img.text-img(src="../assets/img/bur1.jpg")
        .text-block
          img.text-img(src="../assets/img/bur2.jpg")
          p.right-text Главной целью курсового проекта является закрепление полученных знаний во время обучения дисциплины МДК 02.01 информационные технологии и платформы разработки информационных систем.
          

</template>

<script>
export default {
  data () {
    return {
      
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

.header-content
  width 100%
  height 60vh
  background url('../assets/img/header-bg.png')
  background-size 100%
  display flex
  align-items center
  @media screen and (max-width 768px)
    background white
    flex-direction column
    width 100%
    height 100%

.header-content_warp
  margin-left 20px
  @media screen and (max-width 768px)
    margin-left 0px
    text-align center

.coursename
  color #2d3436
  margin-bottom 40px
  @media screen and (max-width 768px)
    text-align center

.big-text
  font-size 64px
  background yellow
  @media screen and (max-width 786px)
    width 100vw
    font-size 48px

.start-button
  background #2d3436
  padding 15px 20px 15px 20px
  border-radius 10px
  color white
  font-size 20px
  text-decoration none
  transition 0.2s
    

.start-button:hover
  box-shadow 0 0 10px black

.theme
  margin: 20px 0 20px 0
  color #7f8c8d
  text-align center

.text-wrapper
  height 100%
  width 100vw

.text-container
  width 90%
  height 100%
  margin-left auto 
  margin-right auto

.text-block
  display flex
  margin-bottom 30px
  @media screen and (max-width 768px)
    flex-direction column

.text-img
  height 250px
  border-radius 10px

.left-text
  font-size 24px
  text-align justify
  padding 0 40px 0 0px
  color #2d3436
  @media screen and (max-width 768px)
    padding 0

.right-text
  font-size 24px
  text-align justify
  padding 0 0 0 40px
  color #2d3436
  @media screen and (max-width 768px)
    padding 0

@media screen and (max-width 768px)
  .mobile-bg
    width 100%
    height 500px
    background-image url('../assets/img/mobile-header.jpg')
    background-size 100%
    
    .small-text
      font-size 18px
</style>
