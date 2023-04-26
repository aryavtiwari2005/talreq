<template>
  <NavBar></NavBar>
  <HeroSection></HeroSection>
  <ClientList></ClientList>
  <TileBoxes></TileBoxes>
  <NetworkTile></NetworkTile>
  <BlockTiles></BlockTiles>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ClientList from './components/ClientList.vue';
import TileBoxes from './components/TileBoxes.vue';
import NetworkTile from './components/NetworkTile.vue';
import BlockTiles from './components/BlockTiles.vue';
export default {
  name: 'App',
  components: {
    NavBar, HeroSection, ClientList, TileBoxes, NetworkTile, BlockTiles
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

@font-face {
  font-family: "Lokeya";
  src: local("Lokeya"), url('./assets/Lokeya.ttf') format("truetype");
}

#app {
  font-family: 'Outfit';
}
</style>
