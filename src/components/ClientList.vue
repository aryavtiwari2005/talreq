<template>
    <div class="client-list">
        <img src="../assets/handshake.png" class="handshake">
        <h1>Our Partners</h1>
        <div class="client-boxes">
            <div class="second-client-box">
                <img src="../assets/client1.jpg">
                <img src="../assets/client2.png">
                <img src="../assets/client3.png" class="phone">
                <img src="../assets/client4.png">
                <img src="../assets/client5.png">
                <img src="../assets/client6.png" class="phone">
                <img src="../assets/client7.png">
                <img src="../assets/client8.png">
            </div>
            <div class="client-box">
                <img src="../assets/client1.jpg">
                <img src="../assets/client2.png">
                <img src="../assets/client3.png" class="phone">
                <img src="../assets/client4.png">
                <img src="../assets/client5.png">
                <img src="../assets/client6.png" class="phone">
                <img src="../assets/client7.png">
                <img src="../assets/client8.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientList"
}
</script>

<style scoped>
.client-list {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    margin: auto;
    margin-top: 20px;
}

.client-list h1 {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Zabal-Bold';
    font-style: italic;
    margin: 15px 0;
}

.client-list .client-box {
    width: 100vw;
    height: 10vh;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    animation: scroller 10s linear infinite;
}

.client-list .second-client-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    transform: translateX(-100%);
    animation: scroller2 10s linear infinite;
}

.client-list .client-boxes {
    position: relative;
    display: flex;
}

.client-list img {
    width: 12vw;
    aspect-ratio: 4/2;
    object-fit: contain;
}

.client-list .client-box img {
    width: 13vw;
    position: relative;
}

.client-list .second-client-box img {
    width: 13vw;
    position: relative;
}

@media screen and (max-width: 650px) {
    .client-list {
        width: 90%;
    }

    .client-list .client-box img,
    .client-list .second-client-box img {
        width: 150px;
    }

    .client-list .client-box,
    .client-list .second-client-box {
        width: 1000px;
    }

    .client-list .client-box {
        animation: phone-scroller 10s linear infinite;
    }

    .client-list .second-client-box {
        animation: phone-scroller2 10s linear infinite;
    }

    .client-list img.handshake {
        width: 80px;
    }

    .client-list img.phone {
        width: 80px !important;
    }
}

@keyframes scroller {
    0% {
        transform: translateX(0vw);
    }

    100% {
        transform: translateX(100vw);
    }
}

@keyframes scroller2 {
    0% {
        transform: translateX(-100vw);
    }

    100% {
        transform: translateX(0vw);
    }
}

@keyframes phone-scroller {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(1000px);
    }
}

@keyframes phone-scroller2 {
    0% {
        transform: translateX(-1000px);
    }

    100% {
        transform: translateX(0px);
    }
}
</style>