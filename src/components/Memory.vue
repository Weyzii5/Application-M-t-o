<template>

<div class="container col-11 col-lg-6" v-bind:class="{ blur: $store.state.showMenu }" id="Memory-body">

 <header class="row my-2">
        <h1>Mémotéo</h1>
        <!-- <h2> score : {{ score }}</h2> -->
    </header>
    <div class="container">
        <div class="row">
            <div id="board" v-for="(card, index) in $store.state.data" :key="index" class="col-6 gy-3">
                <button :class="card.show ? 'show' : ''" @click="flipCard(index, card.city)">
                    <p class="city">{{ card.city }}</p>
                    <p class="temperature">{{ card.temp }}</p>
                    <p :class="card.ico" class="icones"></p>
                </button>
            </div>
        </div>
    </div>
    <!-- <button @click="shuffle">Mélanger</button> -->


</div>
   

</template>

<script>
export default {
    name: 'Memory',
    data() {
        return {
            deck: [
                { cardData: '☀️', show: false },
                { cardData: '☀️', show: false },
                { cardData: '🌧️', show: false },
                { cardData: '🌧️', show: false },
                { cardData: '❄️', show: false },
                { cardData: '❄️', show: false },
                { cardData: '🌥️', show: false },
                { cardData: '🌥️', show: false },
            ],
            currentCardData: null,
            firstId: null,
            newCardsData: '',
            newCardId: 7,
            score: 0,
            maxScore: 3
        }
    },
    // mounted(){
    //     this.shuffle()
    // },
    methods: {
        // addCards() {
        //     console.log("ça marche !")
        //     this.deck.push(this.newCardsData)
        //     this.deck.push(this.newCardsData)
        //     this.newCardsData = ''
        //     // Fonction qui mélange le tableau
        //     // =>

        // },
        flipCard(id, cardData) {
            this.$store.state.data[id].show = true
            console.log(this.currentCardData)
            console.log(cardData)

            if (this.currentCardData === null) {
                this.currentCardData = cardData;
                console.log(this.currentCardData)
                console.log(cardData)
                this.firstId = id

            } else if (cardData === this.currentCardData) {x
                console.log(cardData)
                console.log(this.currentCardData)
                this.score++
                this.currentCardData = null;
                
                if (this.score === this.maxScore) {
                    setTimeout(() => {
                        console.log(this.currentCardData)
                    }, 300)
                }
            }
            else {
                setTimeout(() => {
                    this.deck[this.firstId].show = false
                    this.deck[id].show = false
                }, 1000)
                this.currentCardData = null
                console.log(this.currentCardData)
            }

        },
        // shuffle() {
        //     this.deck.sort(() => Math.random() - 0.5);
        //     console.log(this.deck)
        // }
    }
}

</script>

<style scoped>

#Memory-body{
    border-radius: 10px;
    background: rgba( 5, 5, 5, 0.5 );
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

#board button {
    overflow: hidden;
    box-shadow: 0px 0px 5px rgb(255, 255, 255);
    aspect-ratio: 1/1;
    background-color: rgba(158, 158, 158, 0.601);
    border-radius: 10px;
}

button {
    width: 100%;
  padding: 0.5em;
  background-color: rgba(216, 216, 216, 0.501);
  border-radius: 50px;
  color: rgb(255, 255, 255);
  border: 0px;
  width: 95%;
}

h1 {
    color: aliceblue;
    margin-top: 1em;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h2 {
    margin: auto;
    width: max-content;
    border: 2px solid red;
    border-radius: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

button p {
    margin :0;
    font-size: 0,2em;
    font-weight: bold;
    opacity: 0;
    transition: 0.3s;
}
button .icones{
    margin: 0;
    font-size: 2em;
}
button .temperature{
    margin:0;
    font-size : 2em;
}

button.show p {
    opacity: 1;
}
</style>
