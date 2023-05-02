<template>
    <div class="tiles">
        <div class="box1">
            <div class="sub-box1">
                <h1>Corporate</h1>
                <a href="google.com">Simplify Hiring</a>
            </div>
            <img src="../assets/TileBox1.png">
        </div>
        <div class="box2">
            <div class="sub-box2">
                <h1>Candidate</h1>
                <a href="google.com">Amplify Talent</a>
            </div>
            <img src="../assets/TileBox3.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "TileBoxes"
}
</script>

<style>
.tiles {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 5vh;
}

.tiles .box1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #0095D9;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    height: 250px;
    margin: 10px;
}

.tiles h1 {
    font-size: 24px;
    align-self: flex-start;
    color: #5C6884;
}

.tiles .box1 .sub-box1 {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tiles .box2 .sub-box2 {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tiles .box1 img {
    width: 10vw;
}

.tiles .box2 img {
    width: 10vw;
}

.tiles a {
    justify-self: start;
    text-decoration: none;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #5C6884;
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 20px;
}

.tiles .box2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #3AD4C5;
    border-radius: 10px;
    width: 30%;
    padding: 20px;
    height: 250px;
}

@media screen and (max-width: 650px) {
    .tiles .box1 {
        width: 80%;
    }

    .tiles p {
        font-size: 15px;
    }

    .tiles {
        flex-direction: column;
    }

    .tiles .box1, .tiles .box2 {
        height: 150px;
    }

    .tiles .box2 {
        width: 80%;
    }

    .tiles .box2 img {
        width: 110px;
    }

    .tiles .box1 img {
        width: 100px;
    }
}
</style>