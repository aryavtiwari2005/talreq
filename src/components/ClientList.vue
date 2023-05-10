<template>
    <div class="client-list">
        <img src="../assets/handshake.png">
        <h1>Our Partners</h1>
        <div class="client-box">
            <img src="../assets/client1.png">
            <img src="../assets/client2.png">
            <img src="../assets/client3.png" style="width: 6vw;">
            <img src="../assets/client4.png">
            <img src="../assets/client5.png">
            <img src="../assets/client6.png" style="width: 5vw;">
            <img src="../assets/client7.png">
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
    width: 100%;
    height: 10vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
}

.client-list img {
    width: 10vw;
}

.client-list .client-box img {
    width: 13vw;
    position: relative;
}

@media screen and (max-width: 650px) {
    .client-list {
        width: 90%;
    }

    .client-list .client-box img {
        width: 20vw;
    }
}

@keyframes scroller {
    0% {
        transform: translateX(-10vw);
    }

    100% {
        transform: translateX(70vw);
    }
}
</style>