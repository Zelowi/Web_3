<!-- PostTwo.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <h1>Salad</h1>
            <p>Date: May 11, 2024</p>
            <img src="@/assets/salad.jpg" alt="salad" style="display: block; margin-left: auto; margin-right: auto;">
            <p>
                <b>History and Origin</b>
                The term "salad" comes from the Latin word "salata," which means "salted." Salads have been enjoyed since ancient times, with early records of raw vegetable dishes dating back to the Romans and Greeks. Over centuries, salads have evolved, incorporating a variety of ingredients and dressings.
                <br><br>
                <b>Nutritional Benefits</b>
                Salads are often praised for their nutritional value. They are typically high in vitamins, minerals, and fiber while being low in calories, making them a healthy choice for many diets. The versatility of salads allows for endless customization, catering to different dietary needs and preferences.
            </p>
        </main>
        <footer>
            <div id="comArea">
                <p>Comments</p>
            </div>
            <form @submit.prevent="saveComment">
                <label for="name">Your name:</label>
                <input type="text" id="name" v-model="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
                <label for="comment">Your comment:</label>
                <textarea id="comment" v-model="comment" required></textarea>
                <button type="submit" style="background-color: #55cfff;">Send</button>
            </form>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: 'PostTwo',
    components: {
        AppHeader
    },
    data() {
        return {
            name: '',
            email: '',
            comment: '',
            comments: []
        };
    },
    methods: {
        saveComment() {
            axios.post('http://localhost:3000/comment', {
                name: this.name,
                email: this.email,
                comment: this.comment
            })
            .then(() => {
                alert('Comment added successfully');
                this.name = '';
                this.email = '';
                this.comment = '';
                this.loadComments();
            })
            .catch(error => {
                console.error(error);
            });
        },
        loadComments() {
            axios.get('http://localhost:3000/comments')
            .then(response => {
                this.comments = response.data;
            })
            .catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        this.loadComments();
    }
};
</script>

<style scoped>
@import "@/assets/style_page.css";

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
