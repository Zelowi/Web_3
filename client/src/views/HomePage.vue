<!-- HomePage.vue -->
<template>
    <div>
        <AppHeader />
        <div class="articles">
            <article>
                <h2>Soup</h2>
                <main>
                    <img src="@/assets/soup.jpg" alt="soup" style="display: block; margin-left: auto; margin-right: auto;">
                    <p><b>History and Origin</b>
                       Soup is one of the oldest dishes in the world. It is believed that the first soups were made in the Neolithic era, around 20,000 years ago...
                    </p>
                    <button><router-link to="/post1">Read more</router-link></button>
                </main>
            </article>
            <article>
                <h2>Salad</h2>
                <main>
                    <img src="@/assets/salad.jpg" alt="salad" style="display: block; margin-left: auto; margin-right: auto;">
                    <p><b>History and Origin</b>
                       The term "salad" comes from the Latin word "salata," which means "salted." Salads have been enjoyed since ancient times, with early records of raw vegetable dishes dating back to the Romans and Greeks...
                    </p>
                    <button><router-link to="/post2">Read more</router-link></button>
                </main>
            </article>
            <article>
                <h2>Baguette</h2>
                <main>
                    <img src="@/assets/baguette.jpg" alt="baguette" style="display: block; margin-left: auto; margin-right: auto;">
                    <p><b>History and Origin</b>
                       The baguette is a long, thin loaf of French bread known for its crispy crust and soft interior. Its origins can be traced back to the late 19th century in France...
                    </p>
                    <button><router-link to="/post3">Read more</router-link></button>
                </main>
            </article>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
@import "@/assets/style.css";
</style>
