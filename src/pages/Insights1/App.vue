<template>
    <NavBar></NavBar>
    <div class="tileThing">
        <div class="tile" @click="routing('/insights1')">
            <img src="https://media.discordapp.net/attachments/1023634058158276670/1106274090265890876/s.png">
            <h1>Navigating the Talent Maze: The Challenges of Tech Hiring in Startups</h1>
        </div>
        <div class="tile" @click="routing('/insights2')">
            <img src="https://media.discordapp.net/attachments/1023634058158276670/1110177054902734909/abc.jpg">
            <h1>Remote Work Environment: Adapting to the New Normal</h1>
        </div>
    </div>
    <TileBoxes></TileBoxes>
    <EndFooter></EndFooter>
</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import EndFooter from '@/components/EndFooter.vue';
import TileBoxes from '@/components/TileBoxes.vue';
export default {
    name: 'App',
    components: {
        NavBar,
        EndFooter,
        TileBoxes
    },
    methods: {
        routing: function(link) {
            window.location.href = link;
        }
    }
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

@font-face {
    font-family: "Lokeya";
    src: local("Lokeya"), url('../../assets/Lokeya.ttf') format("truetype");
}

@font-face {
    font-family: 'Zabal';
    src: local("Zabal"), url('../../assets/ZabalDEMO-Regular.otf') format("opentype");
}

#app {
    font-family: 'Zabal';
}

.tileThing {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 120px;
}

.tileThing .tile {
    display: flex;
    color: #5C6884;
    flex-direction: column;
    padding: 20px;
    height: max-content;
    width: 300px;
    border: 2px solid #0095D9;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
}

.tileThing .tile h1 {
    font-size: 24px;
    text-align: center;
}

.tileThing .tile img {
    height: 70px;
}

@media screen and (max-width: 650px) {
    .tileThing .tile {
        width: 250px;
    }
}
</style>  