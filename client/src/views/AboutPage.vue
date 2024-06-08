<!-- AboutPage.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <img src="@/assets/about.jpg" alt="about" style="display: block; margin-left: auto; margin-right: auto;">
            <p>Welcome to FoodArt, a blog dedicated to the culinary arts and the joy of food! We believe that food is more than just a necessity; it's a source of joy, inspiration, and cultural connection.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to inspire people to cook delicious, healthy, and creative dishes, share culinary knowledge from around the world, and create a community where everyone can share their culinary discoveries.</p>
            <h2>Our Team</h2>
            <p>Our team consists of culinary enthusiasts, professional chefs, and writers who share a passion for food. We strive to provide you with the best content to inspire your culinary experiments and discoveries.</p>
            <h2>Contact Us</h2>
            <p>We always welcome your feedback and suggestions. Feel free to reach out to us through our <router-link to="/contact">contact page</router-link> or follow us on social media to stay updated with the latest news and updates.</p>
            <p>Thank you for visiting FoodArt. Let's explore the culinary world together!</p>
        </main>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'AboutPage',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
@import "@/assets/style.css";
</style>
