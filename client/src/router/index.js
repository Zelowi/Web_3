import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import AccountPage from '@/views/AccountPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import PostOne from '@/views/PostOne.vue';
import PostTwo from '@/views/PostTwo.vue';
import PostThree from '@/views/PostThree.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/account', component: AccountPage },
    { path: '/signup', component: SignUpPage },
    { path: '/login', component: LoginPage },
    { path: '/post1', component: PostOne },
    { path: '/post2', component: PostTwo },
    { path: '/post3', component: PostThree }
  ]
});
