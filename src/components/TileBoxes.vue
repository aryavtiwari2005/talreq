<template>
    <div class="pop-up" id="popupcorp" style="display: none;">
        <PopUp popupcontent="corporate content"></PopUp>
        <div class="cross" @click="popup('popupcorp')"><div class="line1"></div><div class="line2"></div></div>
    </div>
    <div class="pop-up" id="popupcand" style="display: none;">
        <PopUp popupcontent="candidate content"></PopUp>
        <div class="cross" @click="popup('popupcand')"><div class="line1"></div><div class="line2"></div></div>
    </div>
    <div class="tiles">
        <div class="box1">
            <div class="sub-box1">
                <h1>Corporate</h1>
                <a @click="popup('popupcorp')">Simplify Hiring</a>
            </div>
            <img src="../assets/corporate_tile.png">
        </div>
        <div class="box2">
            <div class="sub-box2">
                <h1>Candidate</h1>
                <a @click="popup('popupcand')">Amplify Talent</a>
            </div>
            <img src="../assets/candidate_tile.png">
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
    data () {
        return {
            toggle: true
        }
    },  
    methods: {
        popup: function(id) {
            if(this.toggle) {
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
    margin-top: 5vh;
}

.tiles .box1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #0095D9;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    height: 250px;
    margin: 10px;
}

.tiles h1 {
    font-size: 24px;
    align-self: flex-start;
    color: #5C6884;
}

.tiles .box1 .sub-box1 {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tiles .box2 .sub-box2 {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tiles .box1 img {
    width: 12vw;
}

.tiles .box2 img {
    width: 10vw;
}

.tiles a {
    justify-self: start;
    text-decoration: none;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #5C6884;
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
}

.tiles .box2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #3AD4C5;
    border-radius: 10px;
    width: 30%;
    padding: 20px;
    height: 250px;
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

.pop-up .cross .line1, .pop-up .cross .line2 {
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

    .pop-up .cross{
        top: 16%;
        right: 15%;
    }
}

@media screen and (max-width: 650px) {
    .tiles .box1 {
        width: 80%;
    }

    .tiles p {
        font-size: 15px;
    }

    .tiles {
        flex-direction: column;
    }

    .tiles .box1, .tiles .box2 {
        height: 150px;
    }

    .tiles .box2 {
        width: 80%;
    }

    .tiles .box2 img {
        width: 110px;
    }

    .tiles .box1 img {
        width: 100px;
    }
}
</style>