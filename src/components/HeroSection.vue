<template>
    <div class="hero-section">
        <div class="pop-up" id="knowmore" style="display: none;">
            <PopUp
                popupcontent='<form method="POST" action="https://script.google.com/macros/s/AKfycbwrk9RrFLrIJcmlkZ-RUcltMdkt8iIP0EVuaHqe-BJqP5f-8PftqbKeg1LNrxzijV8TtA/exec" name="google-sheet" id="uploadForm"> <div class="name" id="short"> Name: <input type="text" name="name" required> </div> <div class="phone" id="short"> Phone no: <input type="text" name="phone" required> </div> <div class="email" id="long"> Email: <input type="text" name="email" required> </div> <div class="service" id="long"> Are you a? <select name="customerType" required> <option value="Candidate">Candidate</option> <option value="Corporate">Corporate</option> <option value="Vendor">Vendor</option> </select> </div> <input type="submit" value="Submit" name="Sumit" id="sumit"> </form> <style> form { display: flex; flex-wrap: wrap; width: 400px; } form div { display: flex; flex-direction: column; margin: 3px; } form .resume { width: 100%; } form #long { flex: 1 1 400px; } form #short { flex: 1 1 150px; } form #sumit { margin: 5px 0px; background: #0095D9; color: white; font-size: 20px; font-family: "Zabal"; padding: 5px 10px; outline: none; border: none; cursor: pointer; } form div input[type=text] { outline: none; height: 30px; border: 2px solid #5C6884; border-radius: 5px; padding: 0 5px; margin-top: 5px; } form div input[type=text]:focus { border: 2px solid #0095D9; } @media screen and (max-width: 1200px) { form div { flex: 1 1 0px !important; } form { flex-direction: column; } form div input { width: 200px } form .resume { width: 200px; } form #sumit { width: 200px; } } </style>'>
            </PopUp>
            <div class="cross" @click="popup('knowmore')">
                <div class="line1"></div>
                <div class="line2"></div>
            </div>
        </div>
        <img src="../assets/horn.png" id="horn">
        <div class="content">
            <h1 style="margin-bottom: 10px;">Hiring <span>Simplified,</span><img src="../assets/marker.png"
                    class="highlighter"></h1>
            <h1>Talent <span>Amplified.</span></h1>
            <p>Empowering companies and aspirants by streamlining hiring and advocating talent.</p>
            <a @click="popup('knowmore')">Know More</a>
        </div>
        <div class="blobs">
            <img src="../assets/standing-man.png" id="standing-man">
        </div>
    </div>
</template>

<script>
import PopUp from './PopUp.vue';
export default {
    name: "HeroSection",
    components: {
        PopUp
    },
    data() {
        return {
            toggle: true
        }
    },
    methods: {
        popup: function (id) {
            if (this.toggle) {
                document.querySelector('.pop-up#' + id).style = "display: flex;"
            }
            else document.querySelector('.pop-up#' + id).style = "display: none;"
            this.toggle = !this.toggle
        }
    }
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
    height: max-content;
    margin-top: 120px;
    padding-bottom: 20px;
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
    cursor: pointer;
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

.pop-up {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1000;
}

.pop-up .cross .line1,
.pop-up .cross .line2 {
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: white;
}

.pop-up .cross .line1 {
    transform: rotate(45deg);
}

.pop-up .cross .line2 {
    transform: rotate(-45deg);
}

.pop-up .cross {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 26%;
    background-color: #5C6884;
    border-radius: 50%;
    right: 32%;
    padding: 15px;
    cursor: pointer;
    z-index: 999;
}

@media screen and (max-width: 700px) {

    .pop-up .cross {
        top: 16%;
        right: 15%;
    }
}

@media screen and (max-height: 750px) {
    .pop-up .cross {
        top: 11%;
    }
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
        width: 95%;
    }

    .hero-section h1 span.highlighter {
        width: 170px;
    }

    .pop-up .cross {
        top: 16%;
        right: 14%;
    }
}

@media screen and (max-height: 550px) {
    /* .hero-section {
        height: 100vh;
    } */
}
</style>