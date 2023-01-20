<template lang='pug'>
div.no-scroll(v-if="betweenSizeLimited")
  MobileHomeComponent
  //- MobileAboutUsComponent
  MobileServicesComponent
  FooterComponent

div(v-else)
  HeaderComponent
  HomeComponent(:screenWidth="this.screenWidth")
  AboutUsComponent
  ServicesComponent
  FooterComponent

</template>
<script>
import MobileHeaderComponent from '../components/MobileHeaderComponent';
import MobileHomeComponent from '../components/MobileHomeComponent';
import MobileServicesComponent from '../components/MobileServicesComponent';
import MobileAboutUsComponent from '../components/MobileAboutUsComponent';

import HeaderComponent from '../components/HeaderComponent';
import HomeComponent from '../components/HomeComponent';
import AboutUsComponent from './AboutUsComponent.vue';
import ServicesComponent from '../components/ServicesComponent';
import FooterComponent from './FooterComponent';

export default {
  components: {
    MobileHeaderComponent,
    MobileHomeComponent,
    MobileServicesComponent,
    MobileAboutUsComponent,

    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    FooterComponent,
  },

  data() {

    return {
    };

  },

  async created() {

    window.addEventListener('resize', this.getScreen);
    this.screenWidth = window.window.innerWidth;
    await this.getScreen();

  },
  async destroyed() {

    this.screenWidth = window.window.innerWidth;
    window.removeEventListener('resize', this.getScreen);

  },

  methods: {
    getScreen() {

      this.screenWidth = window.window.innerWidth;
      const sizeScreenWidth = window.innerWidth;
      this.betweenSizeLimited = !!((sizeScreenWidth <= 1000));

    },
  },

};
</script>
<style lang='css'>
.no-scroll {
  overflow: hidden;
}
</style>
