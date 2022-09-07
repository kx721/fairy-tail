import VueRouter from "vue-router";
import Home from "../page/index.vue";
import team from "../page/TeamPage.vue";
import User from "../page/UserPage.vue";
import Search from "../page/searchPage.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/team", component: team },
  { path: "/user", component: User },
  { path: "/search", component: Search },
];

export default routes;
