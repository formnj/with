import { createWebHistory, createRouter } from "vue-router";
// var path = '/with/';
if(window.location.hostname == 'formnj.github.io'){
    var path = '/with/';
} else {
    var path = '/';
}

const routes = [
    {
        path: path, //기본 path이면
        component: () => import("@/layout/index"),
        children: [
            {
                path: path+"different",
                component: () => import("@/views/different"),
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