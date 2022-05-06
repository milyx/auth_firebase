<template>
  <div>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="10"
              :type="show1 ? 'text' : 'password'"
              label="Contraseña"
              required
            ></v-text-field>

            <v-btn color="success" class="mr-4" @click="register">
              Registrar
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Limpiar Formulario
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
              Limpiar Validación
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "UserRegisterView",
  components: {
    NavBar,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["createUser"]),
    register() {
      //console.log(this.email);
      this.createUser({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
