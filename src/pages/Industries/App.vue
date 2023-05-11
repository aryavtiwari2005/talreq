<template>
    <NavBar></NavBar>
    <div class="tileLinks" style="margin-top: calc(120px);">
        <NavbarLinks v-for="i in boxes" :key="i.id" :image-link="i.img" :content="i.content" :title="i.title" :popupcontent="i.popupcontent" :popupid="i.popupid"></NavbarLinks>
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
    data () {
        return {
            boxes: [
                {id: id++, title: 'Tech', content: 'ABCDEFGH', popupcontent: 'Our experienced team has a deep understanding of the fast-paced and ever-changing technology industry. We work with clients across a range of tech sub-sectors, from startups to established tech giants, including:<br> <ul><li>Software development and engineering</li><li>Cloud computing and data storage</li><li>Artificial Intelligence and Machine Learning</li><li>Cybersecurity</li><li>E-commerce and digital marketing</li></ul>', popupid:'popup1', img: 'https://media.discordapp.net/attachments/1023634058158276670/1106264541723099278/t.png'},
                {id: id++, title: "Non-Tech", content: "Ipsum", popupcontent: 'Our team has a broad range of expertise and experience in finding talent for industries outside of tech. We understand the challenges faced by clients in these industries and can provide tailored recruitment solutions. We work with clients across a range of non-tech sectors, including:<br><ul><li>Healthcare and Life Sciences</li><li>Finance and Banking</li><li>Retail and Consumer Goods</li><li>Manufacturing and Engineering</li><li>Energy and Utilities</li></ul>', popupid: 'popup2', img: 'https://media.discordapp.net/attachments/1023634058158276670/1106264617421918228/t.png'},
                {id: id++, title: "Startup", content: "Sit Amet", popupcontent: 'We understand the unique needs of startups and emerging businesses, and our team has experience working with startups at all stages of growth. We help startups find the right talent to help them scale and succeed. We work with startups across a range of industries, including:<br><ul><li>Fintech and Insurtech</li><li>Healthtech and Medtech</li><li>Edtech</li><li>Clean Energy and Sustainability</li><li>AI and Big Data</li></ul>', popupid: 'popup3', img: 'https://media.discordapp.net/attachments/1023634058158276670/1106264701568032859/t.png'}
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