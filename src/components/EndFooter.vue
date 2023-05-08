<template>
    <div class="end-footer">
        <img src="../assets/logo-main.png">
        <div class="columns">
            <ul id="first">
                <li>
                    <h3>First Column</h3>
                </li>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
            <ul id="second">
                <li>
                    <h3>Second Column</h3>
                </li>
                <li>Fourth</li>
                <li>Fifth</li>
                <li>Sixth</li>
            </ul>
            <ul id="third">
                <li>
                    <h3>Third Column</h3>
                </li>
                <li>Seventh</li>
                <li>Eighth</li>
                <li>Ninth</li>
            </ul>
        </div>
        <div class="newsletter">
            <h3>Subscribe</h3>
            <form action="">
                <input type="text" name="newsletter" placeholder="Enter Email">
                <button></button>
            </form>
            <span></span>
            <p>Join our newsletter to stay up to date on features and releases</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EndFooter'
}
</script>

<style scoped>
.end-footer {
    display: flex;
    justify-content: space-around;
    color: #5C6884;
    margin-top: 30px;
}

.end-footer img {
    height: 55px;
}

.end-footer .columns {
    display: flex;
}

.end-footer .columns ul {
    list-style: none;
}

.end-footer .columns ul li {
    font-size: 14px;
}

.end-footer .columns ul li h3 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 15px;
}

.end-footer .newsletter h3 {
    margin-bottom: 5px;
    font-size: 15px;
}

.end-footer .newsletter {
    display: flex;
    flex-direction: column;
}

.end-footer .newsletter p {
    font-size: 14px;
}

.end-footer .newsletter form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 220px;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    padding: 0 20px;
}

.end-footer .newsletter form input {
    height: 100%;
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0);
}

.end-footer .newsletter form input:focus {
    outline: none;
}

.end-footer .newsletter form button {
    background: none;
    border: none;
    background: url('../assets/PaperPlane.png');
    width: 20px;
    height: 20px;
    background-size: cover;
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    .end-footer {
        flex-direction: column;
        height: 50vh;
        align-items: center;
        padding: 10px;
    }

    .end-footer .newsletter {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .end-footer .columns ul {
        text-align: center;
        padding: 0;
        margin: 0 10px;
    }

    .end-footer img {
        height: fit-content;
        width: 200px;
    }
    
    .end-footer .newsletter p {
        text-align: center;
        width: 70%;
    }

    .end-footer .newsletter form {
        width: 200px;
    }
}

@media screen and (max-width: 350px) {
    .end-footer {
        height: 70vh;
    }
}
</style>