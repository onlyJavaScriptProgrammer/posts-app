import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage.vue";
import PostsDescription from "../views/posts-description.vue";
import Error from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostsDescription,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not found",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
