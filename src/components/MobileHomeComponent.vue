<template lang='pug'>
div.first-divider
  MobileHeaderComponent
  b-col.col-12.mb-4
    b-row.center(style='margin-left:0;margin-right:0;')
      b-col(cols='12' style='padding:0 !important')
        b-jumbotron.primary-divider.center.mb-0(style='padding-top: 20px')
          div(style='width: 1235px')
            // <Header :isMobile="isMobile" />
            b-row
              b-col.col-12.p-4(style='margin-top: 60px;')
                b-row
                  p.main-text
                    span Otimizando
                    br
                    span Processos
                  p.answer-main-text(style='margin-top: 20px;')
                    span Desenvolvimento
                    br
                    span de software
                    br
                    span de ponta à ponta.
</template>

<script>
import MobileHeaderComponent from '../components/MobileHeaderComponent';

export default {
  components: {
    MobileHeaderComponent,
  },
};
</script>

<style lang='css' scoped>
  .main-text {
    font-size: 39px;
    color: #fff;
    font-weight: bold;
    text-align: left;
  }
  .primary-divider .answer-main-text span {
    background-color: rgba(76, 117, 136, 0.6);
    font-size: 35px;
    padding: 3px;
    display: inline-block;
    border-radius: 5px;
  }
  .answer-main-text {
    font-size: 40px;
    color: #fff;
    text-align: left;
  }
  .home-title {
    font-weight: bold;
    text-align: center;
    color: white;
    font-size: 2.9rem;
    margin-top: 10px;
    padding: 8px 8px 10px 8px
  }
  .home-text-info {
    font-weight: 500;
    text-align: left;
    color: white;
    font-size: 2rem;
    margin: 0;
  }
  label {
    font-family: opensauce semibold;
  }
  .mobile-text-animation {
    animation-duration: 5s;
    animation-name: slidein;
  }
  @keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
    }
  }
  .first-divider-info {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .first-divider {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/img/home-background.jpg');
    background-size: 1350px;
    height: 100vh;
  }
  .animation {
    animation: go-back 2s;
  }
  @keyframes go-back {
    0% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0);
    }
  }
</style>
