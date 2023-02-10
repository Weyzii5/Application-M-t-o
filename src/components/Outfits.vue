<template>
    
    <div class="image-container col-11 col-md-4 mx-auto" 
    v-bind:class="{ blur: $store.state.showMenu }">
<h1 v-bind:class="{ blur: $store.state.showMenu }"> Tenue à essayer</h1>

        <div class="image" id="image-outfit">
        </div>
    </div>

</template>
<script>
export default {
    name : "Outfits",
}
</script>

<style scoped>

h1{
font-weight: bold;
font-size: 1.5em;
color: white;
margin: 1em 0 1em 0;
}

.image-container{
margin : 2em 0 ;
background: rgba( 5, 5, 5, 0.5 );
box-shadow: 0 8px 32px 0 rgba(4, 4, 4, 0.37);
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

background-repeat: no-repeat;
}

.image{
    width: auto;
    height: 60vh;
    border-radius : 10px;
}


    
</style>