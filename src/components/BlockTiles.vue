<template>
    <div class="blockTiles">
        <div class="blocks">
            <div class="blocks1">
                <div class="block1" @mouseover="hover1 = true;" @mouseleave="hover1 = false;" @click="routingThing('/capabilities   ')" id="blockThing">
                    <img src="../assets/Block1.png">
                    <span class="circle" id="circle1"></span>
                    <h2>Capabilities</h2>
                </div>
                <div class="block2" @mouseover="hover2 = true;" @mouseleave="hover2 = false;" @click="routingThing('/industries')" id="blockThing">
                    <img src="../assets/Block2.png">
                    <span class="circle" id="circle2"></span>
                    <h2>Industries</h2>
                </div>
            </div>
            <div class="blocks2">
                <div class="block3" @mouseover="hover3 = true;" @mouseleave="hover3 = false;" @click="routingThing('/insights')" id="blockThing">
                    <img src="../assets/Block3.png">
                    <span class="circle" id="circle3"></span>
                    <h2>Insights</h2>
                </div>
                <div class="block4" @mouseover="hover4 = true;" @mouseleave="hover4 = false;" @click="routingThing('/company')" id="blockThing">
                    <img src="../assets/Block4.png">
                    <span class="circle" id="circle4"></span>
                    <h2>Company</h2>
                </div>
            </div>
        </div>
        <div class="content" :class="{ hover1: hover1, hover2: hover2, hover3: hover3, hover4: hover4}">
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlockTiles",
    methods: {
        routingThing: function (path) {
            window.location.href = path
        }
    },
    data () {
        return {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false
        }
    }
}
</script>

<style scoped>
.blockTiles {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.blockTiles h1 {
    margin: 0 0;
}

.blockTiles h2 {
    margin: 0 0;
    font-family: 'Zabal-Bold';
    font-weight: lighter;
}

.blockTiles #phone {
    display: none;
}

.blockTiles .blocks .blocks1,
.blockTiles .blocks .blocks2 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.blockTiles .blocks .blocks2 .block3, .blockTiles .blocks .blocks2 .block4 {
    cursor: pointer;
    position: relative;
    background-color: #0095D9;
    font-weight: bolder;
    border-radius: 20px;
    width: 250px;
    height: 180px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px;
}

.blockTiles .blocks .blocks1 .block2, .blockTiles .blocks .blocks1 .block1 {
    cursor: pointer;
    position: relative;
    background-color: #3AD4C5;
    border-radius: 20px;
    width: 250px;
    font-size: 20px;
    font-weight: bolder;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px;
}

.blockTiles .blocks img {
    z-index: 1;
    height: 100px;
}

.blockTiles .blocks .circle {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: 8%;
    background-color: #D9D9D9;
    display: none;
}

.blockTiles .content {
    display: flex;
    width: 30%;
    margin: 0 50px;
    font-size: 24px;
    flex-direction: column;
}

.blockTiles .content p {
    margin: 0;
    margin-top: 5px;
    color: #5C6884;
    font-size: 24px;
}

.content p::after {
    content: "At talreq, we are dedicated to helping corporates find the right hires for their teams. With a focus on both tech and non-tech roles across startups and established organizations, we provide tailored hiring solutions to meet the unique needs of each client.";
}

.content.hover1 p::after {
    animation: contentAppear 0.5s linear;
    content: "Our executive search services help organizations find top-level executives for key positions. We work closely with our clients to understand their specific requirements and use our extensive network and industry expertise to identify and attract the best candidates.";
}

.content.hover2 p::after {
    animation: contentAppear 0.5s linear;
    content: "At talreq, we understand that each industry has its unique requirements and demands when it comes to finding top talent. We specialize in providing recruitment solutions across a range of industries.";
}

.content.hover3 p::after {
    animation: contentAppear 0.5s linear;
    content: "talreq understands the unique challenges that startups face when it comes to talent acquisition. That's why we developed TalentLink, our unique methodology that helps startups create a clear, and effective recruitment plan.";
}

.content.hover4 p::after {
    animation: contentAppear 0.5s linear;
    content: "At talreq, we are dedicated to helping corporates find the right hires for their teams. With a focus on both tech and non-tech roles across startups and established organizations, we provide tailored hiring solutions to meet the unique needs of each client.";
}

@keyframes contentAppear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.blockTiles .content p#computer {
    margin-top: 20px;
}

@media screen and (max-width: 710px) {
    .blockTiles {
        flex-direction: column;
        padding: 10px;
        margin-top: 20px;
    }

    .blockTiles #computer {
        display: none;
    }

    .blockTiles h1#phone {
        display: block;
        margin-left: 5px;
    }

    .blockTiles .content {
        width: 80%;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 10px;
    }

    .blockTiles .content p {
        text-align: center;
        font-size: 20px;
    }

    .blockTiles .blocks h2 {
        font-size: 18px;
    }

    .content p::after {
        content: "At talreq, we are dedicated to helping corporates find the right hires for their teams. With a focus on both tech and non-tech roles across startups and established organizations, we provide tailored hiring solutions to meet the unique needs of each client." !important;
    }

    #blockThing {
        width: 150px;
        height: 150px;
    }
}
</style>