<!-- <template>
    <div class="network-tile">
        <div class="content">
            <h2>TALENTLINK</h2>
            <p>Our patented methodology that ensuring opportunity meets the right talent, at the right time</p>
            <a>Register</a>
        </div>
        <div class="images">
            <img src="../assets/NetworkImg2.png" id="image1"><span class="rect1"></span>
            <img src="../assets/NetworkImg1.png" id="image2"><span class="rect2"></span>
        </div>
    </div>
</template> -->

<template>
    <div class="boxes">
        <div class="box1">
            <img src="../assets/talentlink.png">
            <h1>talentLink</h1>
            <p>Our patented methodology that ensures opportunity meets the right talent, at the right time</p>
        </div>
    </div>
</template>

<style scoped>
.boxes {
    margin-top: 130px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.boxes .box1 {
    background-color: #3AD4C5;
    width: max-content;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 70px;
    position: relative;
    border-radius: 20px;
}

.boxes .box1 p {
    width: 450px;
    text-align: center;
    font-size: 24px;
    margin: 0 0;
    margin-bottom: 0;
}

.boxes .box1 h1 {
    margin-top: 0;
    font-family: 'Zabal-Bold';
    font-size: 36px;
}

.boxes .box1 img {
    height: 100px;
    position: absolute;
    top: -45%;
}

.boxes .box2 {
    background-color: #0095D9;
    width: 300px;
    padding: 10px;
    font-size: 24px;
    text-align: center;
    margin: 0 100px;
}

@media screen and (max-width: 650px) {
    .boxes .box1 {
        margin: 20px 0;
        width: 90%;
    }

    .boxes .box1 p {
        font-size: 20px;
        width: 80%;
    }

    .boxes .box2 {
        width: 90%;
        border-radius: 20px;
        margin:  0 0;
    }
}
</style>

<script>
export default {
    name: "NetworkTile"
}
</script>

<!-- <style>
.network-tile {
    width: 50%;
    margin: auto;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    position: relative;
    background-color: #3AD4C5;
    border-radius: 15px;
    margin-top: 20px;
    z-index: -2;
}

.network-tile .content h2 {
    margin: 0;
    color: #5C6884;
}

.network-tile .content p {
    color: #5C6884;
    width: 40%;
}

.network-tile .content a {
    text-decoration: none;
    color: white;
    background-color: #5C6884;
    width: 150px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    letter-spacing: 1px;
}

.network-tile .images {
    display: flex;
    position: absolute;
    right: -10%;
}

.network-tile .images img {
    width: 15vw;
}

.network-tile .images img#image1 {
    margin-right: 3vw;
}

.network-tile .images img#image2 {
    width: 13vw;
}

.network-tile .images span {
    background-color: #5C6884;
    width: 15vw;
    height: 7vw;
    right: 0;
    position: absolute;
    z-index: -1;
    top: 30%;
    border-radius: 20px;
}

.network-tile .images span.rect1 {
    right: -10px;
}

.network-tile .images span.rect2 {
    left: 0;
}

@media only screen and (max-width: 650px) {

    .network-tile {
        margin-top: 20px;
        border: 3px solid #5C6884;
        padding: 20px;
        width: 80%;
    }

    .network-tile .images, .network-tile{
        flex-direction: column;
    }

    .network-tile .images img {
        width: 150px;
    }

    .network-tile .images span {
        position: absolute;
        width: 50vw;
        height: 90px;
    }

    .network-tile .images span.rect1 {
        top: 7%;
        left: 50%;
        transform: translateX(-50%);
    }

    .network-tile .images span.rect2 {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
    }

    .network-tile .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .network-tile .content p {
        text-align: center;
        width: 80%;
    }

    .network-tile .images {
        display: flex;
        position: inherit;
        right: 0;
        align-items: center;
        justify-content: center;
    }

    .network-tile .images img#image1 {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .network-tile .images img#image2 {
        width: 140px;
    }
}
</style> -->