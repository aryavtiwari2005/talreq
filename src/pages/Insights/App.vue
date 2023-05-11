<template>
    <NavBar></NavBar>
    <div class="content">
        <h2 style="text-align: center;">Navigating the Talent Maze: The Challenges of Tech Hiring in Startups</h2>
        <div class="image">
            <img src="https://media.discordapp.net/attachments/1023634058158276670/1106274090265890876/s.png">
            India is currently experiencing a boom in the startup ecosystem, with a growing number of innovative companies
            emerging across various industries. From fintech to e-commerce, healthtech to edtech, Indian startups are
            disrupting
            traditional business models and offering unique solutions to address the country's complex challenges. As of
            February 2023, India has added 13,00 active startups, taking the tally to 23,000 to 25,000 companies. This boom
            is
            also putting a lot of pressure on the available talent in the job markets.
        </div>
        <br>
        <br>
        Startups need to have the right people on board to succeed, and hiring tech talent is crucial for any tech-driven
        business. However, attracting and hiring the right candidates can be challenging, especially for startups that lack
        brand recognition and financial resources. Here are some of the top challenges of hiring tech talent for startups:
        <br>
        <br>
        <b>High competition for top talent</b>: The demand for tech talent is high, and startups often compete with
        well-established companies for the same pool of candidates. This makes it difficult for startups to attract the best
        talent and to stand out from the crowd.
        <br>
        <br>
        <b>Limited budget</b>: Startups often have limited financial resources and cannot afford to pay high salaries and
        benefits
        packages that larger companies offer. This can make it challenging for startups to attract and retain top talent.
        <br>
        <br>
        <b>Lack of brand recognition</b>: Startups may not have a well-known brand, which can make it difficult to attract
        top
        talent. Candidates may not be familiar with the company and may be hesitant to take a risk and join a startup.
        <br>
        <br>
        <b>Skill gaps</b>: Startups often require specialized skills that are difficult to find, especially in emerging
        technologies. This can make it difficult for startups to find candidates with the right skills and experience.
        <br>
        <br>
        <b>Cultural fit</b>: Startups often have a unique culture, and finding candidates who are a good fit can be a
        challenge.
        Startups need employees who are passionate, driven, and willing to take on new challenges.
        <br>
        <br>
        Low joining ratios can further exacerbate these challenges, making it crucial for startups to partner with
        recruitment agencies such as Talreq that have the expertise and tools like TalentLink to identify and attract the
        right talent.
        <br>
        <br>
        <b>Talreq's Solutions:</b>
        <br>
        <br>
        Talreq understands the unique challenges that startups face when it comes to talent acquisition. That's why we
        developed TalentLink, our unique methodology that helps startups create a clear, and effective recruitment plan;
        Assisted with a cutting-edge talent acquisition platform that leverages the latest AI and machine learning
        technologies to help startups identify, attract, and retain top talent. Our talent advocates execute this plan to
        get the correct hire, effectively.
        <br>
        <br>
        <b>With Talreq, startups can:</b>
        <br>
        <br>
        <b>Source candidates more efficiently</b>: TalentLink uses a unique discovery methodology to understand and break
        down the
        job description into skill tags and then AI and machine learning algorithms to sift through thousands of resumes and
        identify the best candidates for the job, saving startups time and money in the recruitment process.
        <br>
        <br>
        <b>Improve candidate engagement</b>: Our personalized candidate experience helps startups stand out from the
        competition
        and build a strong employer brand, we work closely with the startups to create a candidate value proposition and
        keep the candidate engaged and informed throughout the entire process
        <br>
        <br>
        <b>Streamline hiring processes</b>: TalentLink methodology, AI platform and competent talent advocates help the
        startups
        streamline the entire process. They can chose at what stage of the process they need to engage their team, hence
        saving time and effort.
        <br>
        <br>
        <b>Talreq's Expertise:</b>
        <br>
        <br>
        In addition to our cutting-edge technology, Talreq has deep expertise in the recruitment and tech industry and a
        network of experienced talent advocates who understand the unique challenges of hiring for startups. Our team can
        help startups develop targeted recruitment strategies and provide valuable insights into the latest trends and
        technologies in the tech industry.
        <br>
        <br>
        In conclusion, hiring top talent is critical for the success of any startup, but it can be challenging in the
        competitive tech industry. With Talreq's TalentLink methodology, AI platform and industry expertise, startups can
        overcome these challenges and build a strong team of skilled professionals.
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
}
</style>  