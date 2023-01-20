<template lang='pug'>
div.first-divider
  header(:ismobile='isMobile' parentpage='index')
    b-row.center(style='margin-left:0;margin-right:0;')
      b-col(cols='12' style='padding:0 !important')
        b-jumbotron.primary-divider
          div(style='width: 1235px')
            b-row
              b-col.col-12(style='margin-top: 100px;')
                b-col.col-12
                  .d-flex.banner-text-wrapper.justify-content-between
                    div
                      b-row.p-4
                        p.main-text
                          span Otimizando
                          br
                          span Processos
                        p.answer-main-text
                          span Desenvolvimento de software completo para o crescimento do seu negócio.
</template>

<script>

export default {

  props: {
    screenWidth: Number,
  },

  data() {

    return {};

  },
};

</script>

<style lang='scss' scoped>
  .main-text {
    width: 90% !important;
    font-size: 55px;
    color: #fff;
    font-weight: bold;
    text-align: left;
  }
  .primary-divider .answer-main-text span {
    background-color: rgba(76, 117, 136, 0.6);
    padding: 3px;
    display: inline-block;
    border-radius: 5px;
  }
  .answer-main-text {
    font-size: 40px;
    color: #fff;
    text-align: left;
  }
  .icon-width {
    width: 120px;
    height: 120px;
  }
  .first-divider {
    background-image: url('../assets/img/home-background.jpg');
    background-position-x: 10%;
    background-size: 100%;
    background-position-y: 50%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/img/home-background.jpg');
    max-height: 960px;
    min-height: 85vh;
  }
  .area-logo {
    max-width: 150px;
    max-height: 150px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .max-width {
    max-width: 100%;
  }
  .full {
    width: 100%;
  }
  .text-center {
    text-align: center;
  }
  .max-width {
    max-width: 1235px;
    margin: 0 auto;
    width: 100%;
  }
</style>
