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
        component: () => import("@/layout/Wrap"),
        children: [
            {
                path: path+"different",
                component: () => import("@/views/different"),
            },{
                path: path+"components", //기본 path이면
                component: () => import("@/views/components"),
            }
        ]
    },{
        path: path+"setting", //기본 path이면
        component: () => import("@/views/setting"),
    },{
        path: "/:pathMatch(.*)*", //매칭되는 path가 없는 경우
        component: () => import("@/views/notFound")
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});