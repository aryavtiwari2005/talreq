<template>
    <div class="end-footer">
        <img src="../assets/logo-main.png">
        <div class="columns">
            <ul id="first">
                <li>
                    <h3>Quick Links</h3>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/capabilities">Capabilities</a></li>
                <li><a href="/industries">Industries</a></li>
                <li><a href="/insights">Insights</a></li>
                <li><a href="/company">About Us</a></li>
            </ul>
            <ul id="second">
                <li>
                    <h3>Sitemap</h3>
                </li>
                <li><a href="/cookiepolicy">Cookie Policy</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
            </ul>
            <ul id="third">
                <li>
                    <h3>Write to us</h3>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    info@talreq.com
                </li>
                <li>
                    <h3 style="margin-top: 5px;">Call us</h3>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    +91-8282827535
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    +91-124-5025158
                </li>
            </ul>
        </div>
        <!-- <div class="newsletter">
            <h3>Subscribe</h3>
            <form action="">
                <input type="text" name="newsletter" placeholder="Enter Email">
                <button></button>
            </form>
            <span></span>
            <p>Join our newsletter to stay up to date on features and releases</p>
        </div> -->
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
    height: 200px;
}

.end-footer img {
    height: 55px;
}

.end-footer a {
    cursor: pointer;
    text-decoration: none;
    color: #5C6884;
}

.end-footer .columns {
    display: flex;
    width: 50%;
    align-items: self-start;
    justify-content: space-around;
}

.end-footer .columns ul {
    list-style: none;
}

.end-footer .columns ul li {
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.end-footer .columns ul li svg {
    width: 15px;
    margin-right: 5px;
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
        height: max-content;
        align-items: center;
        padding: 10px;
    }

    .end-footer .columns {
        width: 100%;
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
        width: 200px;
        margin-bottom: 20px;
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