<template>
  <NavBar></NavBar>
  <HeroSection></HeroSection>
  <ClientList></ClientList>
  <TileBoxes></TileBoxes>
  <NetworkTile></NetworkTile>
  <CompanyGoals></CompanyGoals>
  <BlockTiles></BlockTiles>
  <EndFooter></EndFooter>
  <CookieBar></CookieBar>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ClientList from './components/ClientList.vue';
import TileBoxes from './components/TileBoxes.vue';
import NetworkTile from './components/NetworkTile.vue';
import CompanyGoals from './components/CompanyGoals.vue'
import BlockTiles from './components/BlockTiles.vue';
import CookieBar from './components/CookieBar.vue';
import EndFooter from './components/EndFooter.vue';
export default {
  name: 'App',
  components: {
    NavBar, HeroSection, ClientList, TileBoxes, NetworkTile, BlockTiles, EndFooter, CompanyGoals, CookieBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

@font-face {
  font-family: "Lokeya";
  src: local("Lokeya"), url('./assets/Lokeya.ttf') format("truetype");
}

@font-face {
  font-family: 'Zabal';
  src: local("Zabal"), url('./assets/ZabalDEMO-Regular.otf') format("opentype");
}

@font-face {
  font-family: 'Zabal-Bold';
  font-weight: bold;
  src: local("Zabal-Bold"), url('./assets/ZabalDEMO-Ultra.otf') format("opentype");
}

#app {
  font-family: 'Zabal';
  overflow-x: hidden;
}
</style>
