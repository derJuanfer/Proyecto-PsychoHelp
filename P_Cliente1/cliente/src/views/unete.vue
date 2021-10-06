<template>
  <v-container>
    <v-container>
      <form id="divp">
        <h2>Iniciar sesión</h2>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          label="Usuario"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Contraseña"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-btn class="mr-4" @click="no"> Iniciar sesión </v-btn>
        <v-btn @click="llamarRegistrarse()"> Registrarse </v-btn>
        <br>
        <br>
        <a @click="llamarRegistroAcesor()">¿Eres un asesor psicológico? Registrate aquí.</a>
      </form>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    llamar() {
      this.$router.push("/unete");
    },
    llamarRegistrarse() {
      this.$router.push("/registrarse");
    },
    llamarRegistroAcesor() {
      this.$router.push("/registro_asesor");
    },
  },
};
</script>


<style lang="scss">
#divp {
  background-color: #e5ebff;
  margin-left: 25%;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 25%;
  padding: 60px;
  text-align: unset;
  border-radius: 40px;
  color: #474747;
}
.img {
  float: right;
  margin-left: 20px;
  width: 250px;
  height: 320px;
}
.footer {
  background-color: #222222;
  margin-block-end: 0%;
}
.button {
  font-size: 15px;
  font-family: Verdana, Helvetica;
  font-weight: bold;
  color: white;
  background: #638cb5;
  border: 0px;
  width: 150px;
  height: 30px;
}
</style>

