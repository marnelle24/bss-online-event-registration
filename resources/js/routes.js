export const routes = [

    {
        path: '/',
        redirect: {name: 'events.index'}
    },
    {
        path: '/events',
        name: 'events.index',
        component: () => import('./routes/Events/Index.vue')
    },
    {
        path: '/event/:slug',
        name: 'event.show',
        component: () => import('./routes/Events/Show.vue')
    },
    {
        path: '/categories',
        name: 'categories.index',
        component: () => import('./routes/Category/Index.vue')
    },
    {
        path: '/category/:slug',
        name: 'category.show',
        component: () => import('./routes/Category/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./routes/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./routes/Order/Summary.vue')
    },


    // Redirections
    {
        path: '/category',
        redirect: {name: 'categories.index'}
    },
];