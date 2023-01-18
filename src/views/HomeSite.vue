<template lang='pug'>
MainPainel
</template>
<script>
import MainPainel from '../components/MainPainel.vue';

export default {
  components: {
    MainPainel,
  },

  data() {

    return {};

  },

};
</script>
<style>
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2b3a54;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2b3a54;
  }
</style>
