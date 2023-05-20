<template>
    <NavBar></NavBar>
    <div class="cookie-policy" style="margin-top: 100px;">
        <h2>Cookie Policy for talreq.com</h2>
        <p>Effective Date: 20th May 2023</p>
        <h2>Introduction</h2>
        <p>This Cookie Policy explains how talreq Solutions LLP ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website, talreq.com (the "website"). This policy describes what cookies are, how we use them, and your choices regarding cookies.</p>
        <h2>What are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies enable websites to remember your preferences, track your activities, and deliver personalized content and advertisements.</p>
        <h2>How We Use Cookies</h2>
        <p>We use cookies on our website for the following purposes:</p>
        <ol>
            <li>Essential Cookies: These cookies are necessary for the functioning of the Website and enable you to navigate and use its features. They are usually set in response to your actions, such as filling out forms or setting preferences.</li>
            <li>Analytics Cookies: We use analytics cookies to collect information about how visitors interact with our Website. This helps us analyze website traffic, enhance user experience, and improve our services. The information collected is aggregated and anonymous.</li>
            <li>Marketing Cookies: Marketing cookies are used to track visitors across websites. They allow us to display personalized advertisements and measure the effectiveness of our marketing campaigns. These cookies may be set by us or by third-party advertising partners.</li>
        </ol>
        <h2>Third-Party Cookies</h2>
        <p>We may also use cookies from third-party service providers, such as analytics and advertising partners, to assist us in analyzing website usage and delivering relevant advertisements. These third parties have their own privacy policies and may use cookies to collect information about your online activities across different websites.</p>
        <h2>Your Cookie Choices</h2>
        <p>You have the option to accept or decline cookies when you visit our website. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may affect the functionality of the Website and limit your access to certain features.</p>
        <p>To manage cookie preferences, you can typically find the option in your browser's "Settings" or "Preferences" menu. You can also refer to the "Help" section of your browser for more information on how to manage and delete cookies.</p>
        <h2>Updates to this Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, and our practices. We encourage you to review this policy periodically for any updates. The "Effective Date" at the top of this policy indicates when the policy was last revised.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at info@talreq.com or +91-8282827535</p>
        <p>By continuing to use our Website, you consent to the use of cookies as described in this Cookie Policy.</p>
    </div>
    <EndFooter></EndFooter>
</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import EndFooter from '@/components/EndFooter.vue';
export default {
    name: 'App',
    components: {
        NavBar,
        EndFooter
    }
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

@font-face {
    font-family: "Lokeya";
    src: local("Lokeya"), url('../../assets/Lokeya.ttf') format("truetype");
}

@font-face {
    font-family: 'Zabal';
    src: local("Zabal"), url('../../assets/ZabalDEMO-Regular.otf') format("opentype");
}

#app {
    font-family: 'Zabal';
}

.cookie-policy {
    padding: 30px;
}
</style>  