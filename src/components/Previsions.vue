<template>
  <div
    id="previsons-div"
    class="col-11 col-lg-6 container mx-auto"
    v-bind:class="{ blur: $store.state.showMenu }"
  >
    <div
      class="col-11 d-inline-flex justify-content-between previsions"
      v-for="jour in shortList"
      :key="jour.id"
    >
      <div class="d-inline-flex">
        <i :class="jour.ico" :i="i++"></i>
        <p>{{ jour.date }} - {{ jour.weather }}</p>
      </div>
      <p>{{ jour.temp + "°" }}</p>
    </div>
    <button class="col-11" @click="toggleShow">
      Prévisions sur {{ x }} jours
    </button>
  </div>
</template>

<script>
export default {
  name: "Previsions",
  data() {
    return {
      x: 7 /*Prévision sur x jours*/,
      show: false,
    };
  },
  methods: {
    toggleShow() {
      if (!this.show) {
        this.x = 3;
        this.show = true;
      } else {
        this.x = 7;
        this.show = false;
      }
    },
  },
  computed: {
    shortList() {
      if (this.show) {
        return this.$store.state.previsions;
      }
      return this.$store.state.previsions.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.previsions {
  color: white;
  transition: 0, 5s ease-in-out;
}
#previsons-div {
  padding: 1em;
  border-radius: 10px;
  background: rgba(5, 5, 5, 0.5);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
button {
  padding: 0.5em;
  background-color: rgba(216, 216, 216, 0.501);
  border-radius: 50px;
  color: rgb(255, 255, 255);
  border: 0px;
  width: 95%;
}
i {
  margin-right: 10px;
}
</style>
