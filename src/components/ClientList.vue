<template>
    <div class="client-list">
        <h1>OUR CLIENTS</h1>
        <div class="client-box">
            <img src="../assets/client1.png">
            <img src="../assets/client2.png">
            <img src="../assets/client3.png">
            <img src="../assets/client4.png">
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
    background-color: #3AD4C5;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.client-list .client-box img {
    width: 10vw;
}

@media screen and (max-width: 650px) {
    .client-list {
        width: 90%;
    }

    .client-list .client-box img {
        width: 20vw;
    }
}
</style>