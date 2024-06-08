<!-- PostOne.vue -->
<template>
    <div>
        <AppHeader />
        <main>
            <h1>Soup</h1>
            <p>Date: May 2, 2024</p>
            <img src="@/assets/soup.jpg" alt="soup" style="display: block; margin-left: auto; margin-right: auto;">
            <p>
                <b>History and Origin</b>
                Soup is one of the oldest dishes in the world. It is believed that the first soups were made in the Neolithic era, around 20,000 years ago. As civilizations developed, different types of soups emerged, reflecting the culinary traditions and available ingredients of various regions.
                <br><br>
                <b>Cultural Significance</b>
                Soup holds a special place in many cultures. For example, in Eastern Europe, borscht (beet soup) is a staple, while in Japan, miso soup is commonly served with meals. In many cultures, soup is not only a comfort food but also a symbol of hospitality and care.
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
    name: 'PostOne',
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
