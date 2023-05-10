<template>
    <div class="pop-up" id="popupcorp" style="display: none;">
        <PopUp popupcontent="corporate content"></PopUp>
        <div class="cross" @click="popup('popupcorp')">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
    </div>
    <div class="pop-up" id="popupcand" style="display: none;">
        <PopUp popupcontent="candidate content"></PopUp>
        <div class="cross" @click="popup('popupcand')">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
    </div>
    <div class="tiles">
        <div class="box1">
            <div class="sub-box1">
                <h1>Corporate</h1>
                <img src="../assets/corporate_tile.png">
                <a @click="popup('popupcorp')">Simplify Hiring</a>
            </div>
        </div>
        <div class="box2">
            <div class="sub-box2">
                <h1>Candidate</h1>
                <img src="../assets/candidate_tile.png">
                <a @click="popup('popupcand')">Amplify Talent</a>
            </div>
        </div>
    </div>
</template>

<script>
import PopUp from './PopUp.vue';
export default {
    name: "TileBoxes",
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
.tiles {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10vh;
}

.tiles .box1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3AD4C5;
    padding: 10px;
    border-radius: 10px;
    width: 400px;
    margin: 0 50px;
}

.tiles h1 {
    font-size: 36px;
    margin: 10px 0;
    font-weight: lighter;
}

.tiles .box1 .sub-box1,
.tiles .box2 .sub-box2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    width: 100%;
}

.tiles .box1 img {
    height: 300px;
}

.tiles .box2 img {
    height: 300px;
}

.tiles a {
    justify-self: start;
    text-decoration: none;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #3c3c3c;
    font-weight: bolder;
    padding: 20px 30px;
    font-size: 20px;
    font-style: italic;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px 0;
}

.tiles .box2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0095D9;
    border-radius: 10px;
    margin: 0 50px;
    width: 400px;
    padding: 10px;
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
    background-color: black;
}

.pop-up .cross .line1 {
    transform: rotate(45deg);
}

.pop-up .cross .line2 {
    transform: rotate(-45deg);
}

.pop-up .cross {
    position: fixed;
    top: 20%;
    right: 33%;
    padding: 10px;
    cursor: pointer;
    z-index: 999;
}

@media screen and (max-width: 700px) {

    .pop-up .cross {
        top: 16%;
        right: 15%;
    }
}

@media screen and (max-width: 650px) {

    .tiles .box1,
    .tiles .box2 {
        width: 80%;
    }


    .tiles p {
        font-size: 15px;
    }

    .tiles {
        flex-direction: column;
        margin-top: 3vh;
    }

    .tiles .box1 {
        margin: 20px 0;
    }

    .tiles .box1 img {
        height: 200px;
    }

    .tiles .box2 img {
        height: 200px;
    }
}</style>