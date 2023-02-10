<template>
  <Header/>
  <Previsions />
  <Outfits/>
  <Memory/>

</template>

<script>
import Memory from "./components/Memory.vue";
import Previsions from "./components/Previsions.vue";
import Header from "./components/Header.vue";
import Sidenav from "./components/Sidenav.vue";
import Outfits from "./components/Outfits.vue"

export default {
  data(){
    return{
      showMenu : false,
    }
  },
  name: "App",
  components: {
    Header,
    Memory,
    Previsions,
    Sidenav,
    Outfits
  },
};
</script>

<style>

</style>
