<template>
    <div class="blockTiles">
        <h1 id="phone">TalentLink</h1>
        <div class="blocks">
            <div class="blocks1">
                <div class="block1">
                    <img src="../assets/Block1.png">
                    <span class="circle" id="circle1"></span>
                    <h2>Capabilities</h2>
                </div>
                <div class="block2">
                    <img src="../assets/Block2.png">
                    <span class="circle" id="circle2"></span>
                    <h2>Industries</h2>
                </div>
            </div>
            <div class="blocks2">
                <div class="block3">
                    <img src="../assets/Block3.png">
                    <span class="circle" id="circle3"></span>
                    <h2>Insights</h2>
                </div>
                <div class="block4">
                    <img src="../assets/Block4.png">
                    <span class="circle" id="circle4"></span>
                    <h2>Company</h2>
                </div>
            </div>
        </div>
        <div class="content">
            <h1 id="computer">TalentLink</h1>
            <p>talentLink is a unique recruitment methodology developed by talreq that enables us to effectively hire the best candidates for our clients.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlockTiles"
}
</script>

<style scoped>
.blockTiles {
    display: flex;
    justify-content: center;
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
    font-size: 20px;
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
}
</style>