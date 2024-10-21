import Vue from "vue";
import VueRouter from "vue-router";

import AllUsers from "@/components/AllUsers.vue";
import SingleUser from "@/components/SingleUser.vue";

Vue.use(VueRouter);

const Home = AllUsers;
const User = SingleUser;

const routes = [
  { path: "/", component: Home },
  { path: "/user", component: User },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
