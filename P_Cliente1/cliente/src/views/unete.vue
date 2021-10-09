<template>
  <v-container>
    <form id="divp" @submit.prevent="iniciarSesion()">
      <h2>Iniciar sesión</h2>
      <v-text-field
      v-model="usuario"
      label="Usuario"
      required
      ></v-text-field>
      <v-text-field
      v-model="contraseña"
      label="Contraseña"
      required
      ></v-text-field>
      <p v-if="error" class="error">Has introducido mal el usuario o la contraseña.</p>
      <v-btn class="my-2" elevation="2" type="submit"> Iniciar sesión </v-btn>
      <div class="mt-10 mb-2 font-weight-bold">
        ¿Aún no tienes una cuenta?
      </div>
      <v-btn @click="llamarRegistrarse()"> Registrarse </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    usuario: "",
    contraseña: "",
    error: false,
    succes: false
  }),
  methods: {
    llamar() {
      this.$router.push("/unete");
    },
    llamarRegistrarse() {
      this.$router.push("/registrarse");
    },
    inciarSesion: async function(){
      console.log(this.usuario)
      console.log(this.contraseña)
    }
  },
};
</script>


<style lang="scss">
#divp {
  background-color: #e5ebff;
  margin-left: 20%;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 20%;
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
