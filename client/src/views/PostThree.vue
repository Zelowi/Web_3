<!-- PostThree.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <h1>Baguette</h1>
            <p>Date: May 22, 2024</p>
            <img src="@/assets/baguette.jpg" alt="baguette" style="display: block; margin-left: auto; margin-right: auto;">
            <p>
                <b>History and Origin</b>
                The baguette is a long, thin loaf of French bread known for its crispy crust and soft interior. Its origins can be traced back to the late 19th century in France. The word "baguette" means "wand" or "baton" in French, reflecting its shape.
                <br><br>
                <b>Characteristics</b>
                A traditional baguette is made from a lean dough of flour, water, yeast, and salt. It is characterized by its length (usually around 65 cm), its crisp, golden-brown crust, and its soft, airy crumb. The baking process involves high temperatures and steam, which help create the baguette's distinctive texture.
                <br><br>
                <b>Cultural Significance</b>
                In France, the baguette is more than just bread; it is a cultural symbol. The French consume it daily, often fresh from the bakery. It is commonly used in sandwiches, served with cheese, or simply enjoyed with butter. The baguette has also gained international popularity, symbolizing French culinary excellence.
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
    name: 'PostThree',
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
