<template>
  <NavBar></NavBar>
  <HeroSection></HeroSection>
  <ClientList></ClientList>
  <TileBoxes></TileBoxes>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ClientList from './components/ClientList.vue';
import TileBoxes from './components/TileBoxes.vue';
export default {
  name: 'App',
  components: {
    NavBar, HeroSection, ClientList, TileBoxes
  }
}
</script>

<style>
@font-face {
  font-family: "Lokeya";
  src: local("Lokeya"), url('./assets/Lokeya.ttf') format("truetype");
}

#app {
  font-family: 'Lokeya';
}
</style>
