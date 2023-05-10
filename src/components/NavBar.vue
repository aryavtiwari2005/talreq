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
            <a>Login <span>→</span></a>
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
                { id: id++, text: "Capabilities", stuff: '<div class="main-grid"> <div class="grid"> <h3 style="margin-top: 0;">Executive Search</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus facilis e</p> </div> <div class="grid"> <h3>Professional Search</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus facilis e</p> </div> <div class="grid"> <h3>Contract Recruiters</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus facilis e</p> </div> <div class="grid"> <h3>Project Recruitment</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus facilis e</p> </div> <div class="grid"> <h3>Recruitment Process Outsourcing (RPO)</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus facilis e</p> </div> <div class="grid"> <h3>Interim Executives</h3> <p>Lorem ipsum dolor sit amet</p> </div> <div class="grid"> <h3>Talent Mapping and Market Research</h3> <p>Lorem ipsum dolor sit amet</p> </div> </div> <style> .main-grid .grid { font-size: 14px; } .main-grid .grid h3 { color: #5C6884; } .main-grid .grid p { font-size: 12px; margin: 0 0;} .main-grid .grid { border-bottom: 1px solid #5C6884; } </style>', link: "/capabilities" },
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
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    width: calc(100% - 40px);
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    z-index: 1000;
    top: 0;
    height: 15vh;
}

.navbar .logo img {
    height: 55px;
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
    font-size: 30px;
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

.navbar ul li:hover .stuff {
    display: block;
    z-index: 10;
    position: absolute;
    width: max-content;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    top: calc(100% + 5px);
}
.navbar .hamburger {
    display: none;
}

.navbar .links {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}

.navbar .links a {
    font-size: 30px;
    border-radius: 30px;
    background-color: rgb(0, 205, 205);
    padding: 5px 20px;
    cursor: pointer;
}

.navbar .links a span {
    color: #808080;
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
        height: 100px;
        padding: 0 20px;
        transition: all 0.3s linear;
    }

    .navbar.active {
        background-color: rgb(18, 180, 255);
        transition: all 0.3s linear;
    }

    .navbar .links ul {
        opacity: 0;
        pointer-events: none;
    }

    .navbar .links {
        position: absolute;
        display: flex;
        z-index: -1;
        height: 0;
        top: 12vh;
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
        justify-content: flex-start;
        padding: 0;
        margin: 0;
        transition: all 0.5s ease-in-out;
    }

    .navbar .links ul.active {
        display: flex;
        opacity: 1;
        pointer-events: all;
        flex-direction: column;
        justify-content: center;
        margin: none;
        padding: none;
        transition: all 1s ease-in-out;
    }

    .navbar .logo img {
        height: 40px;
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