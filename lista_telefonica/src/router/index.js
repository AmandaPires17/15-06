import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListaView from "../views/ListaView.vue";
import FavoritosView from "../views/FavoritosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lista",
      name: "lista",
      component: ListaView,
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: FavoritosView,
    },
  ],
});

export default router;
