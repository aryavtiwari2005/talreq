<template>
    <div class="navbar" :class="{ active: !navToggle }">
        <div class="logo" @click="routingThing('/')"><img alt="Talreq Logo" src="../assets/logo-main.png"></div>
        <div class="links" :class="{ active: !navToggle }">
            <ul :class="{ active: !navToggle }">
                <li v-for="i in elements" :key="i.id" class="link-elements" @click="routingThing(i.link)">{{ i.text
                }}<span></span>
                    <div class="stuff" v-html="i.stuff"></div>
                </li>
            </ul>
        </div>
        <div class="hamburger" @click="hamburgerClick">
            <span class="line" id="line1" :class="{ active: !navToggle }"></span>
            <span class="line" id="line2" :class="{ active: !navToggle }"></span>
            <span class="line" id='line3' :class="{ active: !navToggle }"></span>
        </div>
    </div>
</template>

<script>
let id = 0;
export default {
    data() {
        return {
            navToggle: true,
            elements: [
                { id: id++, text: "Capabilities", stuff: "Executive Search <br> Professional Search <br> Contract Recruiters <br> Project Recruitment <br> Recruitment Process Outsourcing (RPO) <br> Interim Executives <br> Talent Mapping and Market Research", link: "/capabilities" },
                { id: id++, text: "Industries", stuff: "Tech <br> Non-Tech <br> Startup ", link: "/industries" },
                { id: id++, text: "Insights", stuff: "ipsum dolor lorem", link: "/insights" },
                { id: id++, text: "Company", stuff: "impsum lorem dolor", link: "/company" }
            ]
        }
    },
    methods: {
        hamburgerClick: function () {
            this.navToggle = !this.navToggle
        },
        routingThing: function (path) {
            window.location.href = path
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
    position: fixed;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    z-index: 1000;
    top: 0;
    height: 12vh;
}

.navbar .logo img {
    height: 70px;
    cursor: pointer;
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
    position: relative;
}

.navbar ul li .stuff {
    display: none;
    position: relative;
}

.navbar ul li span {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid rgb(63, 194, 255);
}

.navbar ul li:hover span {
    display: block;
}

.navbar ul li:hover .stuff {
    display: block;
    z-index: 10;
    position: absolute;
    width: max-content;
    padding: 20px;
    background-color: rgb(63, 194, 255);
    border-radius: 10px;
    top: calc(100% + 10px);
}

.navbar .hamburger {
    display: none;
}

@media only screen and (min-width: 650px) {
    .navbar .links {
        display: flex;
    }
}

@media only screen and (max-width: 650px) {

    .navbar {
        justify-content: space-between;
        position: fixed;
        width: calc(100% - 40px);
        padding: 0 20px;
        transition: all 0.3s linear;
    }

    .navbar.active {
        background-color: rgb(18, 180, 255);
        transition: all 0.3s linear;
    }

    .navbar .links ul {
        display: none;
    }

    .navbar .links {
        position: absolute;
        display: flex;
        z-index: 10;
        height: 0;
        left: 0;
        padding: 0;
        transition: all 0.5s ease-in-out;
    }

    .navbar .links.active {
        display: flex;
        background: rgb(18, 180, 255);
        width: 100%;
        height: 88vh;
        position: absolute;
        top: 12vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 0;
        margin: 0;
        transition: all 0.5s ease-in-out;
    }

    .navbar .links ul.active {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        width: 100%;
        margin: none;
        padding: none;
    }

    .navbar .logo img {
        height: 50px;
    }

    .navbar .hamburger {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 30px;
        height: 30px;
        padding: 0;
    }

    .navbar .hamburger .line {
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.2s ease-out;
    }

    .navbar .hamburger .line#line1.active {
        width: 0;
    }

    .navbar .hamburger .line#line2.active {
        transform: rotate(45deg) translateX(25%);
    }

    .navbar .hamburger .line#line3.active {
        transform: rotate(-45deg) translateX(25%);
    }

    .navbar .hamburger .line#line1 {
        width: 50%;
        align-self: flex-end;
    }

    .navbar ul li:hover span,
    .navbar ul li:hover .stuff {
        display: none;
    }

    .navbar ul {
        margin: 0;
        padding: 20px;
    }

    .navbar ul li {
        margin: 10px 0;
        font-size: 40px;
        width: 100%;
    }
}
</style>