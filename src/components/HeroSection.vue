<template>
    <div class="hero-section">
        <h1>Hiring <span>Simplified,</span><img src="../assets/marker.png" class="highlighter"></h1>
        <h1>Talent Amplified!</h1>
        <p>Empowering companies and aspirants by streamlining hiring and advocating talent.</p>
        <a href="google.com">Know More</a>
        <div class="blobs">
            <img src="../assets/Ellipse1.png" id="blob1"><img src="../assets/face1.png" class="face1">
            <img src="../assets/Ellipse2.png" id="blob2"><img src="../assets/face2.png" class="face2">
            <img src="../assets/Ellipse3.png" id="blob3"><img src="../assets/face3.png" class="face3">
            <img src="../assets/Ellipse4.png" id="blob4"><img src="../assets/face4.png" class="face4">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroSection"
    }
</script>

<style scoped>
    .hero-section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        height: 70vh;
        margin: auto;
        margin-top: 10vh;
    }

    .hero-section h1 {
        position: relative;
        margin: 0;
        letter-spacing: 1px;
        font-size: 40px;
        color: #5C6884;
        text-align: center;
        z-index: 10;
    }

    .hero-section h1 span {
        color: #3AD4C5;
        margin-left: 10px;
    }

    .hero-section h1 img.highlighter {
        position: absolute;
        left: 33%;
        top: -40%;   
        transform: rotate(10deg);
        height: 90px;
        z-index: -1;
        pointer-events: none;
    }

    .hero-section p {
        width: 30%;
        font-size: 15px;
        text-align: center;
        color: #5C6884;
    }
    .hero-section a {
        text-decoration: none;
        color: white;
        background-color: #5C6884;
        width: 200px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
        font-weight: lighter;
        letter-spacing: 2px;
    }

    .hero-section .blobs img.face1 {
        position: absolute;
        left: 11%;
        top: 6%;
        height: 100px;
    }

    .hero-section .blobs img.face2 {
        position: absolute;
        right: 9%;
        top: 15%;
        height: 80px;
    }    

    .hero-section .blobs img.face3 {
        position: absolute;
        left: 9%;
        bottom: 21%;
        height: 120px;
    }

    .hero-section .blobs img.face4 {
        position: absolute;
        right: 12%;
        bottom: 20%;
        height: 120px;
    }

    .hero-section .blobs img#blob1 {
        position: absolute;
        left: 10%;
        top: 10%;
        height: 110px;
    }

    .hero-section .blobs img#blob2 {
        position: absolute;
        right: 10%;
        top: 20%;
        height: 80px;
    }

    .hero-section .blobs img#blob3 {
        position: absolute;
        left: 10%;
        bottom: 20%;
        height: 90px;
    }

    .hero-section .blobs img#blob4 {
        position: absolute;
        right: 10%;
        bottom: 20%;
        height: 90px;
    }

    .hero-section .blobs {
        position: absolute;
        z-index: -10;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 650px) {

        .hero-section h1 img.highlighter {
            height: 80px;
        }

        .hero-section a {
            width: 170px;
            font-size: 18px;
        }

        .hero-section .blobs {
            display: none;
        }

        .hero-section h1 {
            font-size: 33px;
        }

        .hero-section p {
            width: 70%;
        }

        .hero-section {
            height: 35vh;
        }

        .hero-section h1 span.highlighter {
            width: 170px;
        }
    }

    @media screen and (max-width: 350px) {
        .hero-section h1 img.highlighter {
            top: 32%;
            height: 75px;
            left: 10%;
        }

        .hero-section {
            height: 60vh;
        }
    }
</style>