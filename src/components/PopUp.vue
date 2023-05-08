<template>
    <div class="popup">
        <h1>{{  heading }}</h1>
        <p>{{ popupcontent }}</p>
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 50%;
    padding: 50px;
    z-index: 999;
    border-radius: 10px;
    background-color: white;
}

@media screen and (max-width: 700px) {
    .popup {
        width: 60%;
        height: 60%;
    }
}
</style>