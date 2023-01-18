<template lang='pug'>
  b-container.black.calc--header-navbar(fluid='' :class='isMobileClass' :style="parentPage == 'index' ? 'padding-left: 35px; padding-right: 35px;' : ''")
    .navbar--desktop
      .max-width
        .col-links
          ul.links--list
            li.links--item
              a(href='/#services') Serviços
            li.links--item
              a(href='/#about-us') Sobre nós
            li.links--item
              a(href='/' target='_blank') Fale conosco
            li(style='display: flex; margin-left: 30px')
              button.uk-button UK
              button.sp-button SP
              button.pt-button PT
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
  .icon-width {
    width: 120px;
    height: 120px;
  }
  .area-logo {
    max-width: 150px;
    max-height: 150px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .subtitle-first-divider {
    color: white;
    font-size: 25px;
  }
  .max-width {
    max-width: 100%;
  }
  .full {
    width: 100%;
  }
  .max-width {
    max-width: 1235px;
    margin: 0 auto;
    width: 100%;
  }
  .uk-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/uk-flag.png');
    background-repeat: no-repeat;
    background-size: 160%;
    background-position-x: 40%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    transition: 00.3s;
  }
  .uk-button:hover {
    border: 2px solid #fff;
    color: rgb(45, 187, 253);
    transform: scale(1.1, 1.1);
  }
  .sp-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/spain-flag.png');
    background-size: 130%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    transition: 0.3s;
  }
  .sp-button:hover {
    border: 2px solid #fff;
    color: rgb(45, 187, 253);
    transform: scale(1.1, 1.1);
  }
  .pt-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/brazil-flag.png');
    background-size: 130%;
    background-position-x: 40%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    transition: 0.3s;
  }
  .pt-button:hover {
    border: 2px solid #fff;
    transform: scale(1.1, 1.1);
    color: rgb(45, 187, 253);
  }
  .calc--header-navbar {
    color: white;
    background-image: linear-gradient(
        180deg,
        rgba(10, 30, 71, 0.5) 0%,
        rgba(39, 52, 114, 0) 100%
    );
    min-height: 100px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;

    .navbar--desktop {
        display: flex;
        height: 100%;

        .max-width {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .col-links {
            flex: 1;
            max-width: 800px;

            .links--list {
                display: flex;
                justify-content: flex-end;
                padding-left: 0;
                list-style: none;
                flex-direction: row;
                margin-bottom: 0;
                .links--item {
                    display: flex;
                    align-items: center;
                    font-weight: 600;
                    margin-left: 50px;

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
    }
    .popup-navbar--mobile {
        position: fixed;
        z-index: 1;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        background-color: rgba(39, 52, 114, 0.98);
        padding: 0 15px;
        display: flex;
        flex-direction: column;

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

                        a {
                            color: unset;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
  }
</style>
