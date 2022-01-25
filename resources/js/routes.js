export const routes = [

    {
        path: '/',
        name: 'events.index',
        component: () => import('./routes/Events/Index.vue')
    },
    {
        path: '/event/:slug',
        name: 'event.show',
        component: () => import('./routes/Events/Show.vue')
    }

];