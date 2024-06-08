<!-- LoginPage.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <form @submit.prevent="login">
                <label for="email">Your email</label>
                <input type="email" id="email" v-model="email" required>
                <label for="pass">Your Password</label>
                <input type="password" id="pass" v-model="pass" required>
                <button type="submit">Login</button>
            </form>
        </main>
        <AppFooter />
    </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'LoginPage',
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            email: '',
            pass: ''
        };
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/login', {
                email: this.email,
                pass: this.pass
            })
            .then(response => {
                sessionStorage.setItem('logged', '1');
                sessionStorage.setItem('first_name', response.data.user.first_name);
                sessionStorage.setItem('last_name', response.data.user.last_name);
                sessionStorage.setItem('email', response.data.user.email);
                this.$router.push('/account');
            })
            .catch(error => {
                alert('Invalid email or password');
                console.error(error);
            });
        }
    }
};
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

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-family: Arial;
    display: block;
    margin-bottom: 10px;
    font-weight: semi-bold;
    color: grey;
}

input[type="text"], input[type="email"], input[type="password"] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    width: 300px;
}

button[type="submit"] {
    background-color: #3e8e41;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 200px;
    font-size: 18px;
    font-weight: semi-bold;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #55cfff;
}

p {
    text-align: center;
    margin: 50px;
    font-size: 16px;
    font-family: Arial;
}
</style>
