<template>
    <div v-if="!cookieConsent">
        <div class="cookie-permission">
            <p>
                This website uses cookies to enhance your experience. By using our site, you acknowledge
                that you have read and understand our <a href="/privacypolicy">Privacy Policy</a> and
                <a href="/cookiepolicy">Cookie Policy</a>.
            </p>
            <button @click="acceptCookies">Accept</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CookieBar',
    data() {
        return {
            cookieConsent: false
        };
    },
    methods: {
        acceptCookies() {
            const animation = [
                { bottom: '0%' },
                { bottom: '-100%' }
            ]
            const animationTiming = {
                duration: 2000,
                iteration: 1
            }
            document.querySelector('.cookie-permission').animate(animation, animationTiming)
            setTimeout(() => {
                this.cookieConsent = !this.cookieConsent
            }, 1000);
        }
    }
};
</script>
  
<style scoped>
.cookie-permission {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #f0f0f0;
    text-align: center;
    align-items: center;
    justify-content: center;
    animation: opening 2s linear;
    display: flex;
    flex-wrap: wrap;
}

.cookie-permission p {
    flex: 1 1 300px;
}

.cookie-permission button {
    border: none;
    background-color: #0095D9;
    padding: 10px 20px;
    color: white;
    outline: none;
    font-size: 20px;
    font-family: 'Zabal';
    border-radius: 10px;
    cursor: pointer;
}

@keyframes opening {
    0% {
        bottom: -100%;
    }

    100% {
        bottom: 0%;
    }
}
</style>
  