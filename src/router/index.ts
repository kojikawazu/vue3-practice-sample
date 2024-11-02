import { createRouter, createWebHistory } from 'vue-router';
import { CommonConstants } from '@/config/constants';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: CommonConstants.URL.TODO,
            name: 'todo',
            component: () => import('@/views/todo/TodoView.vue'),
        },
        {
            path: CommonConstants.URL.COMMENTS,
            name: 'comments',
            component: () => import('@/views/comments/CommentView.vue'),
        },
        {
            path: CommonConstants.URL.CONTACT,
            name: 'contact',
            component: () => import('@/views/contact/form/ContactFormView.vue'),
        },
        {
            path: CommonConstants.URL.CONTACT_CONFIRM,
            name: 'contact-confirm',
            component: () => import('@/views/contact/confirm/ContactConfirmView.vue'),
        },
        {
            path: CommonConstants.URL.CONTACT_COMPLETE,
            name: 'contact-complete',
            component: () => import('@/views/contact/complete/ContactCompleteView.vue'),
        },
    ],
});

export default router;
