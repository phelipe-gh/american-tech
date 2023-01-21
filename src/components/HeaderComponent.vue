<template lang='pug'>
div.center(style='width: 100%;')
  b-container.black.calc--header-navbar.flex(fluid='' :class='isMobileClass' style='align-items: center')
    .navbar--desktop(style='display: flex; width:100%;')
      .max-width
        .col-links
          b-row
            b-col.col-2.mt-3
              ul.links--list(style='display: flex; justify-content: start')
                li.links--item
                  div.area-logo
                    img(src='../assets/img/logo.png' style='height: 90px;')
            b-col.col-10.mt-4
              ul.links--list(style='display: flex; justify-content: end;')
                li.links--item(style='margin-left: 80px;')
                  a(href='/#about-us') Sobre nós
                li.links--item(style='margin-left: 80px;')
                  a(href='/#services') Serviços
                li.links--item(style='margin-left: 80px;')
                  a(href='/#consultoria') Consultoria
                li.links--item(style='margin-left: 80px;')
                  a(href='/#fale-conosco') Fale conosco
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
    max-width: 1235px !important;
  }
  .full {
    width: 100%;
  }
  .max-width {
    max-width: 1235px;
    margin: 0 auto;
  }
  .uk-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/uk-flag.png');
    background-repeat: no-repeat;
    background-size: 160%;
    background-position-x: 50%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
  }
  .uk-button:focus {
    border: 2px solid #fff;
    color: rgb(45, 187, 253);
  }
  .sp-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/spain-flag.png');
    background-size: 130%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
  }
  .sp-button:focus {
    border: 2px solid #fff;
    color: rgb(45, 187, 253);
  }
  .pt-button {
    border: 2px solid #000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/brazil-flag.png');
    background-size: 130%;
    background-position-x: 40%;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
  }
  .pt-button:focus {
    border: 2px solid #fff;
    color: rgb(45, 187, 253);
  }
  .calc--header-navbar {
    color: white;
    background-image: linear-gradient(
        180deg,
        rgba(9, 21, 46, 0.938) 70%,
        rgba(128, 140, 202, 0) 100%
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
        max-width: 1235px;

        .max-width {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .col-links {
            flex: 1;

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
