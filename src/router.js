import { createRouter, createWebHistory } from 'vue-router';
import coachDetail from './pages/coaches/coachDetail.vue';
import coachesList from './pages/coaches/coachesList.vue';
import coachRegistration from './pages/coaches/coachRegistration.vue';
import contactCoach from './pages/requests/contactCoach.vue';
import requestReceived from './pages/requests/requestReceived.vue';
import notFound from './pages/notFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesList },
        {
            path: '/coaches/:id',
            component: coachDetail,
            props: true,
            children: [
                { path: 'contact', component: contactCoach }, // /coaches/c1/contact
            ]
        },
        { path: '/register', component: coachRegistration },
        { path: '/requests', component: requestReceived },
        { path: '/notFound(.*)', component: notFound },

    ],
});

export default router;