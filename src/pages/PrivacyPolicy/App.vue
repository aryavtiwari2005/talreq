<template>
    <NavBar></NavBar>
    <div class="privacy-policy" style="margin-top: 100px;">
        <h2>Privacy Policy</h2>
        <p>Last Updated: 20th May 2023</p>
        <p>Thank you for visiting talreq.com, talreq Solutions LLP website ("website"). We are committed to protecting your
            privacy and ensuring that your personal information is handled securely and in compliance with applicable data
            protection laws, including the General Data Protection Regulation (GDPR).</p>
        <h2>Information We Collect</h2>
        <ol>
            <li>
                <h3>Personal Information</h3>
                <p>We may collect personal information from you when you visit our website, including but not limited to:
                </p>
                <ul>
                    <li>Your name</li>
                    <li>Contact information (e.g., email address, phone number)</li>
                    <li>Professional information (e.g., job title, company name, salary details)</li>
                    <li>Information you provide through contact forms or other interactive features on our website</li>
                    <li>Any other information you voluntarily provide to us</li>
                </ul>
            </li>
            <li>
                <h3>Usage Data</h3>
                <p>We may also collect usage data, which may include information such as your IP address, browser type,
                    operating system, referring pages, and navigation patterns on our website. This information helps us
                    analyze trends, administer the website, track user movements, and gather broad demographic information
                    for aggregate use. Usage data is collected through cookies and similar technologies. Please refer to our
                    Cookie Policy for more information.</p>
            </li>
        </ol>
        <h2>Use of Information</h2>
        <p>We may use the information we collect for the following purposes:</p>
        <ul>
            <li>To provide and maintain our services</li>
            <li>To respond to inquiries, requests, or communications from you</li>
            <li>To personalize and improve your experience on our Website</li>
            <li>To send you marketing communications and updates about our services, with your consent where required by law
            </li>
            <li>To comply with legal obligations and enforce our legal rights</li>
            <li>Data Sharing and Disclosure</li>
        </ul>
        <p>We may share your personal information with third parties only in the following circumstances:</p>
        <ul>
            <li>With your consent or at your direction</li>
            <li>With service providers who assist us in operating the Website and delivering our services</li>
            <li>When required by law or to protect our legal rights</li>
        </ul>
        <h2>Data Retention</h2>
        <p>We will retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy
            Policy, unless a longer retention period is required or permitted by law. Once the retention period expires, we
            will securely delete or anonymize your personal information.</p>
        <h2>Data Security</h2>
        <p>We take appropriate technical and organizational measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. However, please note that no method of transmission over the
            Internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means
            to protect your personal information, we cannot guarantee its absolute security.</p>
        <h2>Your Rights</h2>
        <p>Under the GDPR, you have certain rights regarding your personal information. These rights may include the right
            to access, rectify, restrict, or delete your personal information, as well as the right to data portability and
            the right to object to the processing of your personal information. To exercise these rights or if you have any
            questions about our privacy practices, please contact us using the information provided in the "Contact Us"
            section below, or email us at info@talreq.com.</p>
        <h2>Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We
            encourage you to review this page periodically for the latest information on our privacy practices.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            info@talreq.com Or call us at +91-8282827535</p>
        <p>talreq Solutions LLP <br>
            5th Floor, DLF Two Horizon Centre, <br>
            DLF Phase 5, Gurugram, Haryana 122002 <br>
            info@talreq.com <br>
            +91-8282827535 <br>
        </p>
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

.privacy-policy {
    padding: 30px;
}
</style>  