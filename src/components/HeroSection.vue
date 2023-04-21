<template>
    <div class="hero-section">
        <h1>Recruitment Made</h1>
        <h1 class="simple">Simple<span><img src="../assets/Ellipse5.png" id="ellipse5"><img src="../assets/Vector1.png" id="vector1"><img src="../assets/Ellipse6.png" id="ellipse6"></span></h1>
        <p>The most secure marketplace for buying and selling unique crypto assets.</p>
        <a href="google.com">Register</a>
        <div class="blobs">
            <img src="../assets/Ellipse1.png" id="blob1"><img src="../assets/face1.png" class="face1">
            <img src="../assets/Ellipse2.png" id="blob2"><img src="../assets/face2.png" class="face2">
            <img src="../assets/Ellipse3.png" id="blob3"><img src="../assets/face3.png" class="face3">
            <img src="../assets/Ellipse4.png" id="blob4"><img src="../assets/face4.png" class="face4">
            <img src="../assets/Ellipse7.png" id="blob7">
            <img src="../assets/Ellipse8.png" id="blob8">
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
    }

    .hero-section h1 {
        position: relative;
        margin: 0;
        padding-bottom: 10px;
        letter-spacing: 1px;
        font-size: 40px;
        color: #5C6884;
        text-align: center;
    }

    .hero-section h1 span img#ellipse5 {
        position: absolute;
        height: 60px;
        right: -25%;
        top: -10%;
        z-index: -1;
    }

    .hero-section h1 span img#vector1 {
        position: absolute;
        height: 20px;
        bottom: -20%;
        right: -15%;
    }

    .hero-section h1 span img#ellipse6 {
        position: absolute;
        height: 8px;
        bottom: 5%;
        right: -25%;
    }

    .hero-section p {
        width: 30%;
        font-size: 15px;
        text-align: center;
        margin: 20px 0;
        color: #5C6884;
    }
    .hero-section a {
        text-decoration: none;
        color: white;
        background-color: #5C6884;
        width: 250px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-radius: 10px;
        font-weight: lighter;
        letter-spacing: 2px;
    }

    .hero-section .blobs img.face1 {
        position: absolute;
        left: 11%;
        top: 5%;
        height: 100px;
    }

    .hero-section .blobs img.face2 {
        position: absolute;
        right: 11%;
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
        height: 100px;
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

    .hero-section .blobs img#blob7 {
        position: absolute;
        right: 25%;
        top: 10%;
        height: 40px;
    }

    .hero-section .blobs img#blob8 {
        position: absolute;
        left: 20%;
        bottom: 10%;
        height: 50px;
    }

    .hero-section .blobs {
        position: absolute;
        z-index: -10;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 650px) {
        .hero-section .blobs {
            display: none;
        }

        .hero-section h1 {
            font-size: 34px;
        }

        .hero-section p {
            width: 70%;
        }

        .hero-section {
            height: 35vh;
        }
    }
</style>