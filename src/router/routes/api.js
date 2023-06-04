const api = {
    path: '/',
    name: 'Api',
    children: [
        {
            path: '',
            name: 'Default',
            component: ()=> import('@/views/Dashboard/Default.vue'),
            meta: { auth: true},
        },
        {
            path: 'tables',
            name: 'Tables',
            component: ()=> import('@/views/Dashboard/Tables.vue'),
            meta: { auth: true},
        },
        {
            path: 'billing',
            name: 'Billing',
            component: ()=> import('@/views/Dashboard/Billing.vue'),
            meta: { auth: true},
        },
        {
            path: 'profile',
            name: 'Profile',
            component: ()=> import('@/views/Dashboard/Profile.vue'),
            meta: { auth: true},
        },
        {
            path: 'addtodo',
            name: 'AddTodo',
            component: ()=> import('@/views/Dashboard/AddTodo.vue'),
            meta: { auth: true},
        },
    ],
};

export default api;