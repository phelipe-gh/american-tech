<template lang='pug'>
div.first-divider.center
  .max-width-1235
    b-row
      b-col.col-12(style='margin-top: 120px;')
        b-row.p-4
          p.main-text
            span Gerenciando
            br
            span Suas Demandas
            br
            span Tecnológicas
      b-col.col-12
        b-row.p-4
          p.answer-main-text
            label Soluções para o seu negócio na maneira que você precisa.
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
  .answer-main-text span {
    background-color: rgba(0, 62, 99, 0.9);
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
