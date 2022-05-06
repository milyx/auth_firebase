import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/UserLoginView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "homepage" */ "../views/HomePageView.vue"),
  },

  {
    path: "/userregister",
    name: "userregister",
    component: () =>
      import(
        /* webpackChunkName: "userregister" */ "../views/UserRegisterView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("loggedIn");

  if (isAuthenticated === "true") {
    if (to.name == "login" || to.name == "userregister") {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    if (to.name == "login" || to.name == "userregister") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});
export default router;
