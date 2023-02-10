<template>
    

</template>

<script>
export default {
  props: { showMenu:Boolean },

  data() {
    return {
        data: [
        {
          id: 1,
          city: "Pontault-Combault",
          temp: 4,
          weather: "Nuageux",
          ico: "bi bi-cloud-fill",
          timeZone: "Europe/Paris",
        },
        {
          id: 2,
          city: "Courbevoie",
          temp: 3,
          weather: "Nuageux",
          ico: "bi bi-cloud-fill",
          timeZone: "Europe/Paris",
        },
        {
          id: 3,
          city: "Athènes",
          temp: 15,
          weather: "Ensoleillé",
          timeZone: "Europe/Athens",
        },
        {
          id: 4,
          city: "Stockholm",
          temp: -7,
          weather: "Neige",
          timeZone: "Europe/Paris",
        },
        {
          id: 5,
          city: "Phnom Penh",
          temp: 30,
          weather: "Ensoleillé",
          timeZone: "Asia/Seoul",
        },
        {
          id: 6,
          city: "Séoul",
          temp: -9,
          weather: "Pluvieux",
          ico: "bi bi-cloud-drizzle-fill",
          timeZone: "Asia/Seoul",
        },
        {
          id: 7,
          city: "New York",
          temp: 0,
          weather: "Orageux",
          timeZone: "America/New_york",
        },
      ],
    };
  },
  mounted(){
    console.log(this.showMenu)
  }
};
</script>

<style>

</style>
