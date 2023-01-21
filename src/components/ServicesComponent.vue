<template lang='pug'>
div.second-divider.center(id='services')
  .max-width-1235
    b-col.col-12.mt-4
      span.about-title(style='font-weight: 400') Quais são os
      span.about-title Nossos Serviços?
    b-col.col-12.p-4
      b-row
        b-col.col-xl-6.col-lg-12.col-md-12
          div.card
            b-row.center
              b-icon.center(icon='columns' scale='2' style='color: rgb(0, 50, 120)')
            label.services-main-text Criação de Landing pages
            label Uma página que conta com todos os elementos voltados à conversão, do visitante ao lead ou da oportunidade ao cliente.
        b-col.col-xl-6.col-lg-12.col-md-12
          div.card
            b-row.center
              b-icon.center(icon='gear-fill' scale='2' style='color: rgb(0, 50, 120)')
            label.services-main-text Sistemas web
            label Desenvolvemos sistemas web para automatizar seu negócio de maneira que voce consiga extrair o melhor do seu produto.
      b-row
        b-col.col-xl-6.col-lg-12.col-md-12
          div.card
            b-row.center
              b-icon.center(icon='receipt-cutoff' scale='2' style='color: rgb(0, 50, 120)')
            label.services-main-text Criação de blogs
            label Blogs para voce publicar conteúdos, como artigos e fotos de maneira objetiva e intuitiva.
        b-col.col-xl-6.col-lg-12.col-md-12
          div.card
            b-row.center
                b-icon.center(icon='card-checklist' scale='2' style='color: rgb(0, 24, 70)')
            label.services-main-text Atuação sobre demanda
            label Atualmente temos uma grande área de atuação, com diversas tecnologias afim de corrigir/evoluir seu software.
      b-row
        b-col.col-12
          div.card
            b-row.center
              b-icon.center(icon='bar-chart-fill' scale='2' style='color: rgb(0, 50, 120)')
            label.services-main-text Serviços especializados
            label Terceirização de profissionais(Desenvolvedores, QA's e Product Managers)
            label Atuando da maneira que você precisa.
        b-col.col-12
          div.card(id='consultoria')
            b-row.center
              b-icon.center(icon='bar-chart-fill' scale='2' style='color: rgb(0, 50, 120)')
            label.services-main-text Consultoria para sua carreira
            label Temos um guia de sucesso para sua carreira no mundo da tecnologia, com o acompanhamento de profissionais
            label experientes para te ajudar na etapa voce se encontra.
</template>

<style lang='css' scoped>
  .about-title {
    font-size: 50px;
    color: rgb(9, 33, 60);
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .services-background {
    background-image: linear-gradient(to bottom, rgb(0, 107, 130),blue, rgb(9, 33, 60))
  }
  .second-divider {
    background-image: linear-gradient(180deg, rgba(0, 107, 130, 0.08), rgba(9, 65, 129, 0.4))
  }
  .center {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  label {
    color: #000;
  }
  .services-main-text {
    color: rgb(0, 107, 130);
    font-size: 30px;
    font-weight: bold;
    margin-top: 15px
  }
  .card {
    border-radius: 10px;
    box-shadow: 7px 7px 13px 0px rgba(0, 107, 130, 0.6);
    padding: 30px;
    margin: 20px;
    min-height: 200px;
    transition: 0.7s;
  }
  .card:hover {
    transform: scale(1.01, 1.01);
  }
  .services-text {
    color: rgb(0, 107, 130);
    font-size: 25px;
    font-weight: bold;
    margin-top: 15px
  }
</style>
