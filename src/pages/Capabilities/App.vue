<template>
    <NavBar></NavBar>
    <div class="tileLinks" style="margin-top: calc(10vh + 20px);">
        <NavbarLinks v-for="i in boxes1" :image-link="i.img" :key="i.id" :title="i.title" :popupcontent="i.popupcontent"
            :popupid="i.popupid"></NavbarLinks>
    </div>
    <div class="tileLinks">
        <NavbarLinks v-for="i in boxes2" :key="i.id" :image-link="i.img" :title="i.title" :popupcontent="i.popupcontent"
            :popupid="i.popupid"></NavbarLinks>
    </div>
    <div class="tileLinks">
        <NavbarLinks v-for="i in boxes3" :key="i.id" :image-link="i.img" :title="i.title" :popupcontent="i.popupcontent"
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
            boxes1: [
                { id: id++, title: 'Executive Search', content: 'Our executive search services help organizations find top-level executives for key positions. We work..', popupcontent: 'Our executive search services help organizations find top-level executives for key positions. We work closely with our clients to understand their specific requirements and use our extensive network and industry expertise to identify and attract the best candidates. Our executive search services are designed to help organizations build strong leadership teams that can drive business growth and success.', popupid: 'popup1', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105093822427447456/t.png' },
                { id: id++, title: "Professional Search", content: "Our professional search services focus on mid-level to senior-level positions across a range of industries. We use..", popupcontent: 'Our professional search services focus on mid-level to senior-level positions across a range of industries. We use a combination of traditional and innovative sourcing methods to identify and attract high-quality candidates for our clients. Our professional search services are designed to help organizations fill critical positions quickly and efficiently.', popupid: 'popup2', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105094681123110973/t.png' },
                { id: id++, title: "Contract Recruiters", content: "Our contract recruiters provide organizations with experienced and skilled recruiters who..", popupcontent: 'Our contract recruiters provide organizations with experienced and skilled recruiters who can step in and help manage their recruitment needs on a temporary basis. We work closely with our clients to identify their specific requirements and provide recruiters who have the skills and experience needed to help drive successful recruitment efforts.', popupid: 'popup3', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105095119260094594/thumbnail-1.png' }
            ],
            boxes2: [
                { id: id++, title: 'Project Recruitment', content: 'Our project recruitment services help organizations manage recruitment for specific projects or initiatives. We provide..', popupcontent: 'Our project recruitment services help organizations manage recruitment for specific projects or initiatives. We provide a team of dedicated recruiters who work closely with your project team to identify and attract the best candidates for the project. Our project recruitment services are designed to help organizations manage their recruitment needs for specific projects or initiatives.', popupid: 'popup4', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105095332771135571/t.png' },
                { id: id++, title: 'Recruitment Process Outsourcing (RPO)', content: 'Our RPO services help organizations manage their recruitment process end-to-end. We provide..', popupcontent: 'Our RPO services help organizations manage their recruitment process end-to-end. We provide a team of dedicated recruiters who work seamlessly with your HR team to source, screen, and interview candidates. Our RPO services can be customized to meet your specific needs, whether you need support for a one-time project or ongoing recruitment needs.', popupid: 'popup5', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105095255142969384/t.png' },
                { id: id++, title: 'Interim Executives', content: 'Our interim executive services provide organizations with access to experienced and skilled executives who..', popupcontent: 'Our interim executive services provide organizations with access to experienced and skilled executives who can step in and fill key leadership positions on a temporary basis. We work closely with our clients to identify their specific needs and provide interim executives who have the skills and experience needed to help drive business success. Our interim executive services are designed to help organizations bridge leadership gaps during times of transition or uncertainty.', popupid: 'popup6', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105095514707468378/s.png' }
            ],
            boxes3: [
                { id: id++, title: 'Talent Mapping and Market Research', content: 'Our talent mapping and market research services help organizations understand..', popupcontent: 'Our talent mapping and market research services help organizations understand the talent landscape in their industry and identify potential candidates for future recruitment needs. We use a range of research and analysis tools to provide our clients with valuable insights into the talent market, including salary benchmarking, talent availability, and candidate demographics. Our talent mapping and market research services are designed to help organizations stay ahead of the competition by identifying and attracting top talent.', popupid: 'popup7', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105094681362169927/s.png' }
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
    margin: 20px 0;
}

@media screen and (max-width: 700px) {
    .tileLinks {
        flex-direction: column;
    }
}</style>  