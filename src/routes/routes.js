import Vue from 'vue'
import Router from 'vue-router';
import Review from '../views/reviewUsers.vue';
import AddRecord from '../views/add-record.vue'
import Posts from '../views/posts.vue'
Vue.use(Router)

const routes = [
    { path: '/', component: Posts },
    { path: '/users', component: Review },
    { path: '/add-record', component: AddRecord }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router;