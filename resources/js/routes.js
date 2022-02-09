export const routes = [

    {
        name:"homepage",
        path: '/',
        component: () => import('./layouts/Homepage.vue'),
    },
    {
        name:"dashboard",
        path: '/dashboard',
        component: () => import('./components/Admin/Dashboard.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('./components/Login.vue'),
    },
    {
        path: '/events',
        name: 'events.index',
        component: () => import('./components/Event/Index.vue')
    },
    {
        path: '/event/:slug',
        name: 'event.show',
        component: () => import('./components/Event/Show.vue')
    },
    {
        path: '/departments',
        name: 'departments.index',
        component: () => import('./components/Departments/Index.vue')
    },
    {
        path: '/department/:slug',
        name: 'department.show',
        component: () => import('./components/Departments/Show.vue')
    },
    {
        path: '/categories',
        name: 'categories.index',
        component: () => import('./components/Category/Index.vue')
    },
    {
        path: '/category/:slug',
        name: 'category.show',
        component: () => import('./components/Category/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./components/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./components/Order/Summary.vue')
    },


    // Redirections
    {
        path: '/category',
        redirect: {name: 'categories.index'}
    },
    {
        path: '/department',
        redirect: {name: 'departments.index'}
    },
]