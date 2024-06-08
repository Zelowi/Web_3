<!-- AppHeader.vue -->
<template>
    <header>
        <div class="header">
            <div class="menu">
                <ul>
                    <li><img src="@/assets/logo.png" alt="Logo" style="max-height: 40px;max-width: 40px;"></li>
                    <li><router-link to="/">Latest Posts</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/account">Account</router-link></li>
                    <li><router-link to="/signup">Sign Up</router-link></li>
                    <li><router-link to="/login">Log In</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
@import "@/assets/style.css";

header {
    background-color: white;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    text-align: center;
    background-size: cover;
    color: black;
    font-size: 24px;
    font-family: Arial;
    margin: 15px auto;
    font-weight: bold;
}
</style>
