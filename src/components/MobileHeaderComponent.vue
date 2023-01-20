<template lang='pug'>
b-container.calc--header-navbar.nav-bar-background(fluid='' style='padding-left: 35px; padding-right: 35px;')
  .navbar--mobile
    a(href='/')
      img.icon-width(src="../assets/img/logo.png" style='width: 5rem; height: 5rem;')
    .col-burger
      b-icon(icon='list' scale='4.5' style='color: rgb(255, 255, 225);; margin-right: 1rem;' @click='toggleMenu')
        i.fas.fa-bars.text-white(:class="{'active' : menuActived}")
  .popup-navbar--mobile(v-if="menuActived" style='padding-left: 35px; padding-right: 35px; overflow: hidden;')
    .topbar-wrapper(style='display: relative')
      a(href='/' style='display: relative')
        img(src="../assets/img/logo.png" style='width: 5rem; height: 5rem;')
      b-icon(icon='x' scale='5' style='color: rgb(255, 255, 225); margin-top: 1.2rem; margin-right: 1rem' @click='toggleMenu')
    .midbar-wrapper
      ul.links--list
        .links--wrapper
          li.links--item
            a(href='/#mobile-treinamento' @click='toggleMenu') Sobre nós
          li.links--item
            a(href='/#mobile-depoimentos' @click='toggleMenu') Serviços
          li.links--item
            a(href='https://api.whatsapp.com/send?phone=5535999607833&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20a%20American%20Tech.' target="_blank") Fale conosco

</template>
<script>

export default {

  props: {
    screenWidth: Number,
  },

  data() {

    return {
      menuActived: false,
    };

  },
  methods: {
    toggleMenu() {

      this.menuActived = !this.menuActived;

    },
  },
};
</script>
<style lang='scss' scoped>
.liner {
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0px;
  width: 100%;

  &:after {
    content: '';
    flex-grow: 1;
    height: 2px;
    background: #ffffff;
    min-width: 20px;
    margin: 0 auto;
  }
  }
  .mobile-header-animation {
    animation: go-back 0.3s;
  }
  @keyframes go-back {
    0% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0);
    }
  }
  .nav-bar-background {
    background-color: rgba(11, 15, 78, 0.61);
  }
  .max-width {
      max-width: 1235px;
      margin: 0 auto;
      width: 100%;
  }
  .list-font-family {
    font-family: opensauce semibold;
  }
  .calc--header-navbar {
    background-color:  rgb(0, 31, 55);
    box-shadow: 0px 6px 10px rgb(0, 107, 130);
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;

    .navbar--desktop {
        display: flex;
        height: 100%;
        position: absolute;

        .max-width {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .col-links {
            flex: 1;
            max-width: 800px;

            .links--list {
                display: flex;
                justify-content: space-between;
                padding-left: 0;
                list-style: none;
                display: flex;
                flex-direction: row;
                margin-bottom: 0;

                .links--item {
                    display: flex;
                    align-items: center;
                    font-weight: 600;
                    text-align: left;

                    a {
                        color: unset;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    .navbar--mobile {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .popup-navbar--mobile {
        position: fixed;
        z-index: 1;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        background-color: rgb(0, 31, 55);
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;

        .topbar-wrapper {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .midbar-wrapper {
            flex: 1;

            .links--list {
                padding-left: 0;
                list-style: none;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .links--wrapper {
                    .links--item {
                        font-size: 24px;
                        padding-bottom: 35px;
                        text-align: center;
                        display: block;
                        align-items: center;

                        a {
                            color: rgb(255, 255, 255);
                            font-weight: 500;
                            text-align: center;
                            font-size: 1.7rem;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
  }
</style>
