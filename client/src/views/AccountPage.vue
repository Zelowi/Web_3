<!-- AccountPage.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{{ firstName }}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{{ lastName }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{ email }}</td>
                </tr>
            </table>
        </main>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'AccountPage',
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            firstName: sessionStorage.getItem('first_name') || '-',
            lastName: sessionStorage.getItem('last_name') || '-',
            email: sessionStorage.getItem('email') || '-'
        }
    },
    mounted() {
        if (!sessionStorage.getItem('logged')) {
            this.$router.push('/login');
        }
    }
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

table {
    margin: auto;
    border-collapse: collapse;
    width: 60%;
    text-align: left;
    background-color: white;
    font-family: Arial;
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

th, td {
    padding: 12px;
    border: 2px solid silver;
}

th {
    background-color: #4CAF50;
    color: #f2f2f2;
}
</style>
