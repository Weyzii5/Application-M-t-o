<template>

  <!-- Météo Locale -->
  <div class="temp container col-6 p-3">
    <h1 id="temperature" class="mx-auto">
      {{ this.temp }}<sup id="celsus" style="font-size: 0.4em">°</sup>
    </h1>
    <h2>{{ this.weather }}</h2>
    <p>{{ time }}</p>
  </div>
</template>

<script>

export default {
  props: { temp: Number, weather: String, city: String, time:String },
  name: "MeteoLocale",
  }
</script>

<style>

/*---------------------------------------------------- Infos centrales -------------------------------------------------------------------------------------------*/
.temp {
  margin-top: 25vh;
  margin-bottom: 20vh;
  /* background-color: rgba(183, 183, 183, 0); */
  border-radius: 10px;
  color: white;
  max-width: max-content;
}
.temp h1 {
  text-align: center;
  font-size: 6em;
}

#temperature {
  position: relative;
}
#celsus {
  top: 40px;
  position: absolute;
}

