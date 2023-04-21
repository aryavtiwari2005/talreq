<template>
    <div class="navbar">
        <div class="logo"><img alt="Talreq Logo" src="../assets/logo-main.png"></div>
        <div class="links">
            <ul>
                <li v-for="i in elements" :key="i.id" class="link-elements">{{ i.text }}<span></span></li>
            </ul>
        </div>
        <div class="hamburger" @click="hamburgerClick">
            <span class="line" id="line1"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </div>
</template>

<script>
let id = 0;
export default {
    data() {
        return {
            navToggle: false,
            elements: [
                { id: id++, text: "About" },
                { id: id++, text: "Insights" },
                { id: id++, text: "Company" },
                { id: id++, text: "Register" }
            ]
        }
    },
    methods: {
        hamburgerClick: function () {
            var links = document.querySelector('.navbar .links')
            var linksUL = document.querySelector('.navbar .links ul')
            if (this.navToggle) {
                links.style = "display: flex; background: rgb(0, 149, 217); backdrop-filter: blur(10px); z-index: 10; width: 100%; height: 30vh; position: fixed; top: 12vh; flex-direction: column; align-items:center; justify-content: space-around; padding: 0; margin: 0;"
                linksUL.style = "flex-direction: column; height: 100%; font-size: 25px; align-items: center; justify-content: space-around; width: 100%; margin: none; padding: none;"
            }
            else {
                links.style.display = 'none'
            }
            this.navToggle = !this.navToggle
        }
    },
    name: "NavBar"
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 12vh;
    width: 100%;
}

.navbar .logo img {
    height: 70px;
}

.navbar ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
}

.navbar ul li {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.navbar ul li span {
    width: 0px;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
}

.navbar ul li:hover span {
    width: 100%;
    height: 2px;
    background-color: black;
    transform-origin: left;
    transform: scaleX(1);
    transition: transform 0.5s;
}

.navbar .hamburger {
    display: none;
}

.navbar .links {
    display: none;
}

@media only screen and (min-width: 650px) {
    .navbar .links {
        display: flex;
    }
}

@media only screen and (max-width: 650px) {

    .navbar .logo img {
        height: 50px;
    }

    .navbar .hamburger {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        height: 30px;
        width: 30px;
    }

    .navbar .hamburger .line {
        width: 100%;
        height: 3px;
        background-color: black;
    }

    .navbar .hamburger .line#line1 {
        width: 50%;
        align-self: flex-end;
    }
}
</style>