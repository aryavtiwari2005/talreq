<template>
    <NavBar></NavBar>
    <div class="tileLinks" style="margin-top: calc(10vh + 20px);">
        <NavbarLinks v-for="i in boxes" :key="i.id" :content="i.content" :title="i.title" :popupcontent="i.popupcontent"
            :popupid="i.popupid"></NavbarLinks>
    </div>
    <TileBoxes></TileBoxes>
    <EndFooter></EndFooter>
</template>
  
<script>
let id = 0;
import NavBar from '@/components/NavBar.vue';
import EndFooter from '@/components/EndFooter.vue';
import NavbarLinks from '@/components/NavbarLinks.vue';
import TileBoxes from '@/components/TileBoxes.vue';
export default {
    name: 'App',
    components: {
        NavBar,
        EndFooter,
        NavbarLinks,
        TileBoxes
    },
    data() {
        return {
            boxes: [
                { id: id++, title: 'Capabilities', content: 'ABCDEFGH', popupcontent: 'LoremauelKGnekaguvkebnvkjs keb ksehb gsekh gsebkhg bskeh', popupid: 'popup1' },
                { id: id++, title: "Lorem", content: "Ipsum", popupcontent: 'hje, bg,kes bngklsrj bgskulrjgb, srbg srg,j gwhkjsrgb, zsrj', popupid: 'popup2' },
                { id: id++, title: "Dolor", content: "Sit Amet", popupcontent: 'ekj shfkg bksmg hbskhr ghrdsj g', popupid: 'popup3' }
            ]
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

.tileLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
}

@media screen and (max-width: 700px) {
    .tileLinks {
        flex-direction: column;
    }
}
</style>  