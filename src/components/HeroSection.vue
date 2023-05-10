<template>
    <div class="hero-section">
        <img src="../assets/horn.png" id="horn">
        <div class="content">
            <h1 style="margin-bottom: 5px;">Hiring <span>Simplified,</span><img src="../assets/marker.png"
                    class="highlighter"></h1>
            <h1>Talent <span>Amplified.</span></h1>
            <p>Empowering companies and aspirants by streamlining hiring and advocating talent.</p>
            <a href="google.com">Know More</a>
        </div>
        <div class="blobs">
            <img src="../assets/standing-man.png" id="standing-man">
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroSection"
}
</script>

<style scoped>
.hero-section img#horn {
    height: 16vw;
    margin-right: 50px;
    transform: rotate(-20deg);
}

.hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    margin-top: 15vh;
}

.hero-section .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    flex-direction: column;
}

.hero-section h1 {
    position: relative;
    margin: 0;
    font-size: 60px;
    text-align: center;
    z-index: 10;
}

.hero-section h1 span {
    color: #3AD4C5;
    margin-left: 10px;
    font-weight: lighter;
}

.hero-section h1 img.highlighter {
    position: absolute;
    left: 34%;
    top: -40%;
    height: 120px;
    z-index: -1;
    pointer-events: none;
}

.hero-section p {
    width: 520px;
    font-size: 30px;
    text-align: center;
    font-style: italic;
    font-weight: bolder;
    font-family: 'Zabal-Bold';
}

.hero-section a {
    text-decoration: none;
    color: black;
    background-color: rgb(130, 130, 255);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border-radius: 10px;
    font-weight: bold;
}

.hero-section .blobs {
    z-index: -10;
}

.hero-section .blobs img#standing-man {
    height: 450px;
    align-self: baseline;
}

@media screen and (max-width: 650px) {

    .hero-section img#horn {
        display: none;
    }

    .hero-section h1 img.highlighter {
        height: 70px;
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
        height: 60vh;
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