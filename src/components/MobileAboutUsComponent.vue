<template lang='pug'>
div.second-divider(id='about-us' style='margin-top: -30px')
  b-col.col-12.p-3
    b-row.p-4
      label.about-title Quem somos?
        label.about-text Somos um grupo brasileiro formado por profissionais inspiradores,
          | &nbsp; sempre otimizando várias atividades no processo de desenvolvimento de software.
          | Conseguimos atuar desde a criação de uma ideia até sua entrega final.
          | Nosso objetivo é com as suas metas.
</template>

<style lang='css' scoped>
  .about-title {
    font-size: 40px;
    color: rgb(9, 52, 116);
    font-weight: bold;
    text-align: center;
  }
  .about-text {
    font-size: 20px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: left;
    margin-top: 25px;
  }
  /* .about-image {
    background-image: linear-gradient(rgba(0, 107, 130, 0.3), rgba(9, 33, 60, 0.8)), url('../assets/img/about-us-image.jpeg');
    border-radius: 15px;
    height: 400px;
    max-width: 500px;
  } */
  .center {
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
