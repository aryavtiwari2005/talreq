<template>
    <div class="blockTiles">
        <h1 id="phone">Blocks</h1>
        <div class="blocks">
            <div class="blocks1">
                <div class="block1">
                    <img src="../assets/Block1.png">
                    <span class="circle" id="circle1"></span>
                    <h2>Lorem</h2>
                </div>
                <div class="block2">
                    <img src="../assets/Block2.png">
                    <span class="circle" id="circle2"></span>
                    <h2>Ipsum</h2>
                </div>
            </div>
            <div class="blocks2">
                <div class="block3">
                    <img src="../assets/Block3.png">
                    <span class="circle" id="circle3"></span>
                    <h2>Dolor</h2>
                </div>
                <div class="block4">
                    <img src="../assets/Block4.png">
                    <span class="circle" id="circle4"></span>
                    <h2>Conse</h2>
                </div>
            </div>
        </div>
        <div class="content">
            <h1 id="computer">Blocks</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi.</p>
            <p id="computer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlockTiles"
}
</script>

<style>
.blockTiles {
    display: flex;
    justify-content: center;
    padding: 50px;
}

.blockTiles h1 {
    color: #5C6884;
    letter-spacing: 2px;
    margin: 0;
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

.blockTiles .blocks .blocks1 .block1, .blockTiles .blocks .blocks2 .block4 {
    position: relative;
    background-color: rgba(0, 149, 217, 0.5);
    letter-spacing: 3px;
    border-radius: 10px;
    width: 250px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 5px;
}

.blockTiles .blocks .blocks1 .block2, .blockTiles .blocks .blocks2 .block3 {
    position: relative;
    background-color: rgba(92, 104, 132, 0.8);
    color: white;
    letter-spacing: 3px;
    border-radius: 10px;
    width: 250px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 5px;
}

.blockTiles .blocks img {
    z-index: 1;
    height: 80px;
}

.blockTiles .blocks .circle {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: 10%;
    background-color: #D9D9D9;
}

.blockTiles .content {
    display: flex;
    width: 20%;
    margin: 0 50px;
    flex-direction: column;
}

.blockTiles .content p {
    margin: 0;
    margin-top: 5px;
    color: #5C6884;
    font-size: 16px;
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
}
</style>