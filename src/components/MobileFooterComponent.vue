<template lang='pug'>
  div
    div.black-background.mt-4.p-3
          b-row.center
            label(style="font-weight: 700;font-size: 50px; color: white; margin-top: 30px") Obrigada por acreditar em nosso trabalho
          b-col.col-12.center
            label.mt-4.contact-text Contato
          b-col.col-12.mt-4
            b-icon(icon='envelope-fill' scale='1' style='color: white; margin-right: 8px;')
            label.contact-text-info-mobile contato@rhubaceleradora.com
          b-col.col-12.mt-2
            b-icon(icon='telephone-fill' scale='0.8' style='color: white; margin-right: 7px')
            label.contact-text-info-mobile 55 11 983347404
          b-col.col-xs-12.col-md-12.col-lg-12.center.mt-2
            b-icon(icon='geo-alt' scale='0.8' style='color: white; margin-right: 7px')
            label.contact-text-info-mobile Avenida Presidente Juscelino Kubitscheck,
          b-col.col-12.mt-2
            label.contact-text-info-mobile  2041 Torre D - São Paulo
          b-row
            div.center
              img(src="../assets/img/RHUB_fundo_transparente__EscalaCinza.png")
</template>

<style lang='css' scoped>
  .center {
    display: flex;
    justify-content: center;
  }
  .contact-text {
    color: white;
    font-size: 35px;
  }
  .contact-text-info-mobile {
    color: white;
    font-size: 16.5px;
  }
  img {
    height: 165px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .area-logo {
    max-width: 200px;
    max-height: 200px;
  }
  .black-background {
    background-color: rgb(0, 0, 0);
  }
</style>
