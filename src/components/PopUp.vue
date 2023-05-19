<template>
    <div class="popup">
        <h1>{{ heading }}</h1>
        <p v-html="popupcontent"></p>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: ['popupcontent', 'heading']
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 30%;
    height: max-content;
    padding: 10px 50px;
    z-index: 999;
    border-radius: 10px;
    background-color: white;
}

@media screen and (max-width: 700px) {
    .popup {
        width: 60%;
    }
}

@media screen and (max-height: 750px) {
    .popup {
        top: 10%;
    }
}
</style>