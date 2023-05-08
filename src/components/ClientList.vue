<template>
    <div class="client-list">
        <h1>OUR CLIENTS</h1>
        <div class="client-box">
            <img src="../assets/client1.png">
            <img src="../assets/client2.png">
            <img src="../assets/client3.png" style="width: 5vw;">
            <img src="../assets/client4.png">
            <img src="../assets/client5.png">
            <img src="../assets/client6.png" style="width: 4vw;">
            <img src="../assets/client7.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientList"
}
</script>

<style>
.client-list {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
}

.client-list h1 {
    color: #5C6884;
    letter-spacing: 1.5px;
    font-size: 30px;
    margin: 10px 0;
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

.client-list .client-box img {
    width: 7vw;
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