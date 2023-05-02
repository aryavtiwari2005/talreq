<template>
    <div class="popup">
        <p>{{ popupcontent }}</p>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: ['popupcontent']
}
</script>

<style>
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    padding: 50px;
    z-index: 999;
    border-radius: 10px;
    border: 2px solid black;
    background-color: antiquewhite;
}

@media screen and (max-width: 700px) {
    .popup {
        width: 60%;
        height: 60%;
    }
}
</style>