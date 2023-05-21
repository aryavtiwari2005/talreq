<template>
    <div class="pop-up" :id="popupid" style="display: none;">
        <PopUp :popupcontent="popupcontent"></PopUp>
        <div class="cross" @click="popup(popupid)">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
    </div>
    <div class="tile" @click="popup(popupid)">
        <img :src="imageLink">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
import PopUp from './PopUp.vue';
export default {
    name: 'NavbarLinks',
    components: {
        PopUp
    },
    props: ['title', 'content', 'popupcontent', 'popupid', 'imageLink'],
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
.tile {
    display: flex;
    color: #5C6884;
    flex-direction: column;
    padding: 30px;
    height: 150px;
    width: 250px;
    border: 2px solid #0095D9;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    cursor: pointer;
    border-radius: 10px;
}

.tile h1 {
    font-size: 24px;
    text-align: center;
}

.tile img {
    height: 100px;
}

.tile p {
    text-align: center;
}

.pop-up {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
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
    .tile {
        margin: 10px 0;
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
}</style>