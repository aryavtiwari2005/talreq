<template>
    <div class="pop-up" id="popupcorp" style="display: none;">
        <PopUp
            popupcontent="<form method='POST' action='https://script.google.com/macros/s/AKfycbwAs7T-YmosrJTJ14nm2ttUiBk2-blimWGGN6me0XKmYogpzsve_ENYdAJZHzGqo3o_LQ/exec'> <div class='email' id='long'> Name of the organization: <input type='text' name='noo' required> </div> <div class='name' id='short'> Organization location: <input type='text' name='location' required> </div> <div class='phone' id='short'> Your name: <input type='text' name='name' required> </div> <div class='skills' id='long'> Your Designation: <input type='text' name='designation' placeholder='eg.Manager' required> </div> <div class='ctc1' id='short'> Email address: <input type='text' name='email' required> </div> <div class='ctc2' id='short'> Mobile number: <input type='text' name='mnumber' required> </div> <div class='service' id='long'> Which service are you interested in? <select name='service' required> <option value='Executive Search'>Executive Search</option> <option value='Professional Search'>Professional Search</option> <option value='Contract Recruiters'>Contract Recruiters</option> <option value='Staff Augmentation'>Staff Augmentation</option> <option value='RPO'>RPO</option> <option value='Talent Mapping and Market Research'>Talent Mapping and Market Research</option> <option value='Undecided'>Undecided</option> </select> </div> <div class='notice' id='long'> Please provide any additional Information: <input type='text' name='info'> </div> <input type='submit' value='Submit' name='Sumit' id='sumit'> </form> <style> form { display: flex; flex-wrap: wrap; width: 400px; font-size: 18px; } form select { margin-top: 5px; height: 40px; border: 2px solid #5C6884; border-radius: 5px; padding: 0 5px; outline: none; cursor: pointer; } form select:focus { outline: none; border-color: #0095D9; } form div { display: flex; flex-direction: column; margin: 3px; } form .resume { width: 100%; } form #long { flex: 1 1 400px; } form #short { flex: 1 1 150px; } form #sumit { margin: 5px 0px; background: #0095D9; color: white; font-size: 20px; font-family: 'Zabal'; padding: 5px 10px; outline: none; border: none; cursor: pointer; } form div input[type=text] { outline: none; height: 30px; border: 2px solid #5C6884; border-radius: 5px; padding: 0 5px; margin-top: 5px; } form div input[type=text]:focus { border: 2px solid #0095D9; } @media screen and (max-width: 1200px) { form div { flex: 1 1 0px !important; } form { flex-direction: column; } form select { width: 200px; } form div { width: 200px } form #sumit { width: 200px; } } </style>">
        </PopUp>
        <div class="cross" @click="popup('popupcorp')">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
    </div>
    <div class="pop-up" id="popupcand" style="display: none;">
        <PopUp
            popupcontent='<form method="POST" action="https://script.google.com/macros/s/AKfycbyBDH12Ve389mCQri5RGKQd_1h7ER_B1-Wpx9dRYRq7JXVZLd2qGQjQo0Np-47vRLLE/exec" name="google-sheet" id="uploadForm"> <div class="email" id="long"> Email: <input type="text" name="email" required> </div> <div class="name" id="short"> Name: <input type="text" name="name" required> </div> <div class="phone" id="short"> Phone no: <input type="text" name="phone" required> </div> <div class="skills" id="long"> Skills: <input type="text" name="skills" placeholder="Please list your top 4 skills" required> </div> <div class="ctc1" id="short"> Current CTC: <input type="text" name="curctc" required> </div> <div class="ctc2" id="short"> Expected CTC: <input type="text" name="expctc" required> </div> <div class="notice" id="long"> Notice Period / Availability to join: <input type="text" name="notice" required> </div> <div class="resume"> <input type="hidden" value="" name="fileContent" id="fileContent"> <input type="hidden" value="" name="filename" id="filename"> Upload Resume PDF (.pdf, .doc, .docx, .zip): <input required id="attach" name="attach" type="file"> </div> <input type="submit" value="Submit" name="Sumit" id="sumit"> </form> <style> form { display: flex; flex-wrap: wrap; width: 400px; } form div { display: flex; flex-direction: column; margin: 3px; } form .resume { width: 100%; } form #long { flex: 1 1 400px; } form #short { flex: 1 1 150px; } form #sumit { margin: 5px 0px; background: #0095D9; color: white; font-size: 20px; font-family: "Zabal"; padding: 5px 10px; outline: none; border: none; cursor: pointer; } form div input[type=text] { outline: none; height: 30px; border: 2px solid #5C6884; border-radius: 5px; padding: 0 5px; margin-top: 5px; } form div input[type=text]:focus { border: 2px solid #0095D9; } @media screen and (max-width: 1200px) { form div { flex: 1 1 0px !important; } form { flex-direction: column; } form div input { width: 200px } form .resume { width: 200px; } form #sumit { width: 200px; } } </style>'>
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
        const form = document.forms['google-sheet']

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            var reader = new FileReader();
            var file = document.getElementById('attach').files[0];

            reader.onload = function () {
                document.getElementById('fileContent').value = reader.result;
                document.getElementById('filename').value = file.name;
                document.getElementById('uploadForm').submit();
            }

            reader.readAsDataURL(file)
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
        top: 16%;
        right: 14%;
    }
}

@media screen and (max-height: 750px) {
    .pop-up .cross {
        top: 11%;
    }
}
</style>