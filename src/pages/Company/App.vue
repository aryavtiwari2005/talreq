<template>
    <NavBar></NavBar>
    <div class="content">
        <h2 style="text-align: center;">About Us</h2>
        <div class="image">
            <img src="https://media.discordapp.net/attachments/1023634058158276670/1106278726561443972/s.png">
            At talreq, we are dedicated to helping corporates find the right hires for their teams. With a focus on both
            tech
            and non-tech roles across startups and established organizations, we provide tailored hiring solutions to meet
            the
            unique needs of each client.
        </div>
        <br>
        <br>
        Our unique methodology, talentLink, sets us apart from other recruitment agencies. It enables us to effectively
        source, screen, and match candidates with the right job requirements, ensuring a smooth and efficient hiring
        process.
        <br><br>
        Transparency, accountability, innovation, collaboration, and excellence are the core values that guide our approach.
        We believe in open and honest communication, taking ownership of our work, embracing new ideas, working together
        towards common goals, and delivering high-quality services to our clients and candidates.
        <br><br>
        Our goal is to establish lasting relationships with our clients and candidates, built on trust and mutual respect.
        We work closely with our clients to understand their needs and tailor our services accordingly. Our commitment to
        delivering exceptional results has earned us a reputation as a trusted partner in the world of recruitment.
        <br><br>
        We are passionate about helping our clients and candidates achieve their goals and are constantly exploring new
        ideas and approaches to improve our processes and services. We believe that our success is directly linked to the
        success of our clients and candidates and are committed to their continued growth and development.
        <br><br>
        Our team comprises of industry veterans with experience in various HR related capacities spanning more than 100 man
        years, we have earned a reputation as a trusted recruitment partner for organizations across industries. Our
        commitment to excellence and quality has earned us the trust of our clients.
        <br><br>
        We believe in building long-term relationships with our clients, and we are committed to providing ongoing support
        and guidance even after the hiring process is complete. Our values of transparency, accountability, innovation,
        collaboration, and excellence underpin everything we do, and we are passionate about helping organizations achieve
        their goals through the power of great talent.
    </div>
    <TileBoxes></TileBoxes>
    <EndFooter></EndFooter>
</template>
  
<script>
let id = 0;
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

.content {
    margin-top: 120px;
    padding: 40px;
    font-size: 20px;
}

.content .image {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.content .image img {
    height: 200px;
    margin: 20px 0;
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

    .content h2 {
        margin: 0 0;
    }
}</style>  