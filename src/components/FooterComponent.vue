<template lang='pug'>
div.footer-div(id='fale-conosco')
  div.footer-divider-info.p-4
    b-row.center.h-100.flex
      b-col.col-xs-12.col-md-12.col-lg-12.center.flex-box
        b-row
          b-col.col-12.flex-box
            label.title-first-divider(style="font-weight: 700; text-align: center;") Contato
    b-row.center.h-100.flex
      b-row.mb-5
        b-col.col-12.flex-box
          b-icon(icon='envelope-fill' scale='1' style='color: white; margin-right: 7px')
          label.contact-text-info(style='cursor: text;') contact@americantechdev.org
        b-col.col-12.flex-box(style='margin-top: 10px')
          b-icon(icon='geo-alt' scale='1' style='color: white; margin-right: 7px; margin-bottom: 1px')
          label.contact-text-info Poços de Caldas - Minas Gerais
        b-col.col-12.flex-box(style='margin-top: 10px')
          b-icon(icon='telephone-fill' scale='1' style='color: white; margin-right: 7px')
          a.contact-text-info(href='https://api.whatsapp.com/send?phone=5535999607833&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20a%20American%20Tech.' target="_blank") +55 (35)999607833
        b-col.col-12.flex-box.center
          div.area-logo
            img(src='../assets/img/logo.png' style='height: 150px; margin-bottom: -20px;')

</template>
<script>

export default {

};
</script>
<style lang='css'>
  .footer-div {
    background-image: linear-gradient(180deg, #7d99bb, #04142c)
  }
  .contact-text {
    color: white;
    font-size: 35px;
  }
  .contact-text-info {
    color: white;
    font-size: 17px;
    font-weight: 300;
  }
  img {
    height: 165px;
  }
  .title-first-divider {
    color: white;
    font-size: 55px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .area-logo {
    max-width: 200px;
    max-height: 200px;
  }
  .footer-divider-info {
    width: 100%;
    opacity: 0.8;
  }
</style>
