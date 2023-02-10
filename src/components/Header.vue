<template>
  <!-- Header -->
  <div>
    <header
      id="header"
      class="navbar fixed-top p-3"
      v-bind:class="{ opacity0: $store.state.showMenu, 'onScroll': !this.topOfPage }"
    >
      <h1 class="justify-self-center m-auto">{{ $store.state.city }}</h1>
      <i
        id="more"
        @click="$store.commit('toggleMenu')"
        class="bi bi-plus-lg"
      ></i>
    </header>
  </div>
  <!-- Sidenav -->
  <nav
    id="sidenav-1"
    class="col-lg-4 col-sm-12 row align-items-end"
    v-bind:class="{ show: $store.state.showMenu }"
  >
    <form class="">
      <h1>Changer de ville</h1>
      <input
        type="text"
        placeholder="Saisir la ville"
        @click="this.value = ''"
      />
    </form>
    <i class="bi bi-arrow-right" id="arrow"></i>
    <ul class="">
      <li
        v-for="city in MeteoData"
        :key="city.id"
        @click="
          this.$store.commit('refreshMeteo', city.id - 1), //Appeler une fonction du store
            $store.commit('toggleMenu')
        "
      >
        <p>{{ city.city }}</p>
        <p>{{ city.temp }}<sup> c°</sup></p>
      </li>
    </ul>
  </nav>
  <MeteoLocale
    v-bind:temp="$store.state.temp"
    v-bind:weather="$store.state.weather"
    v-bind:city="$store.state.city"
    :time="$store.state.time"
    v-bind:class="{ blur: $store.state.showMenu }"
  />
</template>

<script>
import MeteoLocale from "./MeteoLocale.vue";
export default {
  components: { MeteoLocale }, //J'appelle MeteoLocale qui est un composant enfant
  data() {
    return {
      topOfPage: true,
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 150) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
  },
  computed: {
    // Pour le V-for du Sidenav
    MeteoData() {
      return this.$store.state.data;
    },
  },
  mounted() {
     window.addEventListener('scroll', this.handleScroll)
    //Pour afficher la première ville au démarrage
    this.$store.commit("refreshMeteo", 0);
  },
};
</script>
<style scoped>
header {
  margin-bottom: 10%;
  color: white;
  font-size: 1.2em;
  transition: all .2s ease-in-out;
}
.onScroll {
      background-color: rgb(0, 0, 0);
}
h1 {
  font-size: 1em;
}

/********************Icones **********************************/
#arrow,
#more {
  margin-right: 10px;
  position: absolute;
  color: aliceblue;
  text-align: right;
  right: 19px;
  top: 5px;
}
#more {
  font-size: 1.5em;
}
#arrow {
  font-size: 1.8em;
}
/********************Sidenav **********************************/
#sidenav-1 {
  display: flex;
  position: fixed;
  top: 0;
  right: -220%;
  height: 100vh;
  z-index: 1;
  text-align: left;
  padding: 20px 25px;
  justify-content: start;
  align-items: flex-start;
  transition: 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.466);
}
#sidenav-1.show {
  right: 0;
}
#sidenav-1 h1 {
  text-align: left;
  font-weight: bold;
  color: aliceblue;
  font-size: 1.8em;
  margin-bottom: 1em;
}

#sidenav-1 ul {
  padding: 0;
}
#sidenav-1 li {
  display: flex;
  justify-content: space-between;
  color: aliceblue;
  margin: 0.5em 0;
  font-size: 1.2em;

  list-style-type: none;

  padding: 1em;
  border-radius: 10px;

  background: rgba(5, 5, 5, 0.871);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
#sidenav-1 p {
  margin: 0;
}
#sidenav-1 input {
  width: 100%;
  padding: 0.3em;
  padding-left: 1em;
  border-radius: 20px;
  border: 0;
  color: rgba(46, 46, 46, 0.774);
}

form {
  padding: 0 20px;
}
</style>
