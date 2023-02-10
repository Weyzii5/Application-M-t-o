import { createStore } from "vuex";

export default createStore({
  state: {
    data: [
      {
        id: 1,
        city: "Pontault-Combault",
        temp: 8,
        weather: "Nuageux",
        ico: "bi bi-cloud-fill",
        timeZone: "Europe/Paris",
      },
      {
        id: 2,
        city: "Courbevoie",
        temp: 9,
        weather: "Nuageux",
        ico: "bi bi-cloud-fill",
        timeZone: "Europe/Paris",
      },
      {
        id: 3,
        city: "Athènes",
        temp: 10,
        weather: "Ensoleillé",
        ico: "bi bi-brightness-high-fill",
        timeZone: "Europe/Athens",
      },
      {
        id: 4,
        city: "Stockholm",
        temp: -1,
        weather: "Neige",
        ico: "bi bi-cloud-fill",
        timeZone: "Europe/Paris",
      },
      {
        id: 5,
        city: "Phnom Penh",
        temp: 30,
        weather: "Ensoleillé",
        ico: "bi bi-brightness-high-fill",
        timeZone: "Asia/Seoul",
      },
      {
        id: 6,
        city: "Séoul",
        temp: -1,
        weather: "Pluvieux",
        ico: "bi bi-cloud-drizzle-fill",
        timeZone: "Asia/Seoul",
      },
      {
        id: 7,
        city: "New York",
        temp: 4,
        weather: "Orageux",
        ico: "bi bi-cloud-lightning-fill",
        timeZone: "America/New_york",
      },
    ],
    previsions: [
      {
        id: 1,
        date: "Demain",
        temp: 10,
        weather: "Nuageux",
        ico: "bi bi-cloud-fill",
      },
      {
        id: 2,
        date: "Ven",
        temp: 11,
        weather: "Pluvieux",
        ico: "bi bi-cloud-drizzle-fill",
      },
      { id: 3, date: "Lun", temp: -3, weather: "Neige", ico: "bi bi-snow" },
      {
        id: 4,
        date: "Sam",
        temp: 10,
        weather: "Ensoleillé",
        ico: "bi bi-brightness-high-fill",
      },
      {
        id: 5,
        date: "Dim",
        temp: 9,
        weather: "Ensoleillé",
        ico: "bi bi-brightness-high-fill",
      },
      {
        id: 6,
        date: "Lun",
        temp: 8,
        weather: "Orageux",
        ico: "bi bi-cloud-lightning-rain-fill",
      },
      {
        id: 7,
        date: "Mar",
        temp: 6,
        weather: "Ensoleillé",
        ico: "bi bi-brightness-high-fill",
      },
    ],
    // boolean pour Menu
    showMenu: false,
    // Donées méteo
    temp: "",
    weather: "",
    city: "",
    time: new Date().toLocaleTimeString("fr-FR"),
    currentTimeZone: "Europe/Paris",
  },
  mutations: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    refreshMeteo(state, index) {
      (state.city = state.data[index].city),
        (state.temp = state.data[index].temp),
        (state.weather = state.data[index].weather);
      state.currentTimeZone = state.data[index].timeZone;

      // Pour appeler un fonction dans mutations il faut utliser this.commit
      this.commit("setTime");
      this.commit("refreshBackground");
      this.commit("refreshOutfits");
    },
    refreshBackground(state) {
      if (state.weather == "Nuageux") {
        document.body.style.background =
          "url(/src/img/day_cloudy_bg.gif) fixed";
        document.body.style.background =
          "url(/src/img/day_cloudy_bg.gif) fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPositionX = "-50px";
      } else if (state.weather == "Ensoleillé") {
        document.body.style.backgroundSize = "cover";
        document.body.style.background = "url(/src/img/day_sunny_bg.gif) fixed";
        document.body.style.backgroundSize = "cover";
      } else if (state.weather == "Pluvieux") {
        document.body.style.background = "url(/src/img/day_rainy_bg.gif) fixed";
        document.body.style.backgroundSize = "cover";
      } else if (state.weather == "Neige") {
        document.body.style.background = "url(/src/img/day_snowy_bg.gif) fixed";
        document.body.style.backgroundSize = "cover";
      } else if (state.weather == "Orageux") {
        document.body.style.background = "url(/src/img/thunder_bg.gif) fixed";
        document.body.style.backgroundSize = "cover";
      }
    },
    refreshOutfits(state) {
      document.getElementById("image-outfit").backgroundRepeat = "no-repeat";
      if (state.weather == "Nuageux") {
        document.getElementById("image-outfit").style.background =
          "url(/src/img/outfits/printemps_femme.png) no-repeat";
        document.getElementById("image-outfit").style.backgroundSize =
          "contain";
        document.getElementById("image-outfit").style.backgroundPosition =
          "center";
      } else if (state.weather == "Ensoleillé") {
        document.getElementById("image-outfit").style.background =
          "url(/src/img/outfits/ete_femme.png) no-repeat";
        document.getElementById("image-outfit").style.backgroundSize =
          "contain";
        document.getElementById("image-outfit").style.backgroundPosition =
          "center";
      } else if (state.weather == "Pluvieux") {
        document.getElementById("image-outfit").style.background =
          "url(/src/img/outfits/hiver_femme.png) no-repeat";
        document.getElementById("image-outfit").style.backgroundSize =
          "contain";
        document.getElementById("image-outfit").style.backgroundPosition =
          "center";
      } else if (state.weather == "Neige" || "Orageux") {
        document.getElementById("image-outfit").style.background =
          "url(/src/img/outfits/hiver_femme.png) no-repeat";
        document.getElementById("image-outfit").style.backgroundSize =
          "contain";
        document.getElementById("image-outfit").style.backgroundPosition =
          "center";
      }
    },
    setTime(state) {
      setInterval(() => {
        state.time = new Date().toLocaleTimeString("fr-FR", {
          timeZone: state.currentTimeZone,
        });
      }, 1000);
    },
  },
});
