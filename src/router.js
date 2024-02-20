import { createWebHistory, createRouter } from "vue-router";
// var path = '/with/';
if(window.location.hostname == 'formnj.github.io'){
    var path = '/with/';
} else {
    var path = '/';
}

const routes = [
    // {
    //     path: path, //기본 path이면
    //     component: () => import("@/views/index"),
    // },{
    {
        path: path, //기본 path이면
        component: () => import("@/views/setting"),
        name: "pc",
        children: [
            {
                // path: path+"setting/vue2",
                path: path,
                component: () => import("@/views/vue2"),
            },{
                path: path+"setting/vue3",
                component: () => import("@/views/vue3"),
            },
        ]
    },{
        path: path+"form", //기본 path이면
        component: () => import("@/views/forms"),
    },{
        path: path+"script", //기본 path이면
        component: () => import("@/views/script"),
    },,
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});