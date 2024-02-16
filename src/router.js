if(window.location.hostname == 'formnj.github.io'){
    var path = '/with/';
} else {
    var path = '/';
}

import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "path", //기본 path이면
        component: () => import("@/views/index"),
    },{
        path: path+"setting/vue2", //기본 path이면
        component: () => import("@/views/setting"),
        children: [
            {
                path: path+"setting/vue2",
                component: () => import("@/views/vue2"),
            },{
                path: path+"setting/vue3",
                component: () => import("@/views/vue3"),
            },
        ]
    },{
        path: path+"form", //기본 path이면
        component: () => import("@/views/forms"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});