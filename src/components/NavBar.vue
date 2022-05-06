<template>
  <div>
    <v-toolbar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Desafío Auth</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <router-link to="/home">Home</router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-btn icon>
        <v-icon @click="salir">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    ...mapActions(["signOff"]),
    salir() {
      this.signOff();
      localStorage.setItem("loggedIn", "false");
      router.push("/login");
    },
  },
};
</script>
