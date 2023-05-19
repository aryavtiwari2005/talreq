<template>
    <div class="pop-up" id="popupcorp" style="display: none;">
        <PopUp popupcontent="corporate content"></PopUp>
        <div class="cross" @click="popup('popupcorp')">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
    </div>
    <div class="pop-up" id="popupcand" style="display: none;">
        <PopUp
            popupcontent='<form method="POST" name="google-sheet"> <div class="email" id="long"> Email: <input type="text" name="Email" required> </div> <div class="name" id="short"> Name: <input type="text" name="Name" required> </div> <div class="phone" id="short"> Phone no: <input type="text" name="Phone" required> </div> <div class="skills" id="long"> Skills: <input type="text" name="Skills" placeholder="Please list your top 4 skills" required> </div> <div class="ctc1" id="short"> Current CTC: <input type="text" name="CurCTC" required> </div> <div class="ctc2" id="short"> Expected CTC: <input type="text" name="ExpCTC" required> </div> <div class="notice" id="long"> Notice Period / Availability to join: <input type="text" name="Notice" required> </div> <input type="submit" value="Submit" name="Submit" id="submit"> </form> <style> form { display: flex; flex-wrap: wrap; width: 400px; } form div { display: flex; flex-direction: column; margin: 3px; } form #long { flex: 1 1 400px; } form #short { flex: 1 1 150px; } form #submit { margin: 5px 0px; background: #0095D9; color: white; font-size: 20px; font-family: "Zabal"; padding: 5px 10px; outline: none; border: none; } form div input { outline: none; height: 30px; border: 2px solid #5C6884; border-radius: 5px; padding: 0 5px; margin-top: 5px; } form div input:focus { border: 2px solid #0095D9; } @media screen and (max-width: 1200px) { form div { flex: 1 1 0px !important; } form { flex-direction: column; } form div input { width: 200px } form #submit { width: 200px; } } </style>'>
        </PopUp>
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
    },
    mounted() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwVu2TSjaCxcBEADRrlt0er6zr1VckylEQz69Tpakq2Z3r3IWs9I7EVeUZMMGltL-CP/exec'
        const form = document.forms['google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    alert('Your data has been registered succesfully!!')
                    console.log('Success! ' + response)
                })
                .catch(error => console.error('Error!', error.message))
        })
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

    .pop-up .cross {
        top: 26%;
        right: 14%;
    }
}

@media screen and (max-height: 750px) {
    .pop-up .cross {
        top: 11%;
    }
}
</style>