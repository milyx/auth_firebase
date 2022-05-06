<template>
  <div>
    <NavBar />

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="10"
              :rules="nameRules"
              :type="show1 ? 'text' : 'password'"
              label="Contraseña"
              required
            ></v-text-field>
            <v-row class="bottons">
              <v-btn
                large
                color="primary"
                dark
                :disabled="!valid"
                depressed
                class="mr-4 iniciar"
                @click="starNow"
              >
                Iniciar
              </v-btn>
              <v-btn large color="error" dark class="mr-4">
                Limpiar Formulario
              </v-btn></v-row
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "UserLoginView",
  components: {
    NavBar,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["startSession"]),
    starNow() {
      this.startSession({
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
<style>
.form {
  width: 50rem;
  margin: auto;
}
.bottons {
  justify-content: space-evenly;
  padding-top: 20px;
}
</style>
