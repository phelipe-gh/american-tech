<template lang='pug'>
div.footer-div.centered
  div.footer-divider-info.p-4
    b-row.center.h-100.flex
      b-col.col-xs-12.col-md-12.col-lg-12.center.flex-box
        b-row
          b-col.col-12.flex-box
            label.title-first-divider(style="font-weight: 700; text-align: center;") Obrigada por acreditar em nosso trabalho
    b-row.center.h-100.flex
      b-row
        b-col.col-12.flex-box
          label.contact-text Contato
        b-col.col-12.flex-box
          b-icon(icon='envelope-fill' scale='1' style='color: white; margin-right: 7px')
          label.contact-text-info contato@rhubaceleradora.com
        b-col.col-12.flex-box
          b-icon(icon='telephone-fill' scale='1' style='color: white; margin-right: 7px')
          label.contact-text-info 55 11 983347404
        b-col.col-12.flex-box
          b-icon(icon='geo-alt' scale='1' style='color: white; margin-right: 7px')
          label.contact-text-info Avenida Presidente Juscelino Kubitscheck,
        b-col.col-12.flex-box
          label.contact-text-info  2041 Torre D - São Paulo
    b-row
      b-col.col-12.center
        div.area-logo
          img(src="../assets/img/RHUB_fundo_transparente__EscalaCinza.webp" width="165" height="165" alt="RHUB Logo Icon Black White")

</template>
<script>

export default {

};
</script>
<style lang='css' scoped>
  .contact-text {
    color: white;
    font-size: 35px;
  }
  .contact-text-info {
    color: white;
    font-size: 18px;
  }
  img {
    height: 165px;
  }
  .title-first-divider {
    color: white;
    font-size: 65px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .area-logo {
    max-width: 200px;
    max-height: 200px;
  }
  .footer-div {
    background-image: url('../assets/img/city-footer.webp');
    height: 80vh;
    max-height: 1280px;
    background-position: center;
  }
  .footer-divider-info {
    width: 100%;
    background-color: rgb(0, 0, 0);
    opacity: 0.8;
  }
</style>
