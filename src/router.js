import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/with", //기본 path이면
        component: () => import("@/views/index"),
    },{
        path: "/with/setting/", //기본 path이면
        component: () => import("@/views/setting"),
        children: [
            {
                path: "/with/setting/",
                component: () => import("@/views/vue2"),
            },{
                path: "/with/setting/vue3",
                component: () => import("@/views/vue3"),
            },
        ]
    },{
        path: "/with/form", //기본 path이면
        component: () => import("@/views/forms"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});