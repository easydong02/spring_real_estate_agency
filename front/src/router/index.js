import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";
import BoardList from "@/components/board/BoardList.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardModify from "@/components/board/BoardModify.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "list",
        component: BoardList,
      },
      {
        path: "detail/:no",
        name: "detail",
        component: BoardDetail,
      },
      {
        path: "write",
        name: "write",
        component: BoardWrite,
      },
      {
        path: "modify/:no",
        name: "modify",
        component: BoardModify,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
