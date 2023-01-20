<template lang='pug'>
div.second-divider(id='about-us' style='margin-top: -30px')
  b-col.col-12.p-3
    b-row.p-3
      b-col.col-lg-col-5(style='padding: 40px')
        div.about-image
      b-col.col-7.center
        b-row.p-4
          label.about-title Quem somos?
            label.about-text Somos um grupo brasileiro formado por profissionais inspiradores,
              | &nbsp; sempre otimizando várias atividades no processo de desenvolvimento de software.
              br
              | Conseguimos atuar desde a criação de uma ideia até sua entrega final.
              br
              | Nosso objetivo é com as suas metas.
</template>

<style lang='css' scoped>
  .about-title {
    font-size: 40px;
    color: rgb(9, 52, 116);
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
  }
  .about-text {
    font-size: 24px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: left;
    margin-top: 25px;
  }
  .about-image {
    background-image: linear-gradient(rgba(0, 107, 130, 0.3), rgba(9, 33, 60, 0.8)), url('../assets/img/about-us.webp');
    background-position-x: 70%;
    border-radius: 15px;
    height: 400px;
    max-width: 500px;
    margin: 0px auto;
    background-size: 600px;
    display: flex;
    justify-content: center;
  }
  .center {
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
