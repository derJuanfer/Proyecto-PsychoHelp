<template>
  <v-container>
    <form id="divp" @submit.prevent="buscarAsesor()">
      <h2>Iniciar sesión</h2>
      <v-text-field
        v-model="form.usuario"
        label="Usuario"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.contraseña"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        label="Contraseña"
        required
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
        v-model="form.codigo_unico"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        label="Código único de acceso"
        required
        @click:append="show2 = !show2"
      ></v-text-field>
      <p v-if="error" class="error">Datos ingresados erróneos.</p>
      <v-btn class="my-2" elevation="2" type="submit"> Iniciar sesión </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    form:{
      usuario: "",
      contraseña: "",
      codigo_unico: ""
    },
    usuario: [],
    error: false,
    succes: false,
    show1: false,
    show2: false
  }),
  methods: {
    llamar() {
      this.$router.push("/unete");
    },
    llamarRegistrarse() {
      this.$router.push("/registrarse");
    },
    buscarAsesor(){
      var logueado = false
      this.axios.get("nuevo_asesor") .then(res => {
        this.asesor = res.data

        this.asesor.forEach((value, index) => {
          if(this.form.usuario === value.usuario){
            console.log("Usuario encontrado.");

            if(this.form.contraseña === value.contraseña && this.form.codigo_unico === value.codigo_unico){
              console.log("Contraseña correcta.");
              logueado = true

              window.localStorage.setItem("auth", "ok")
              window.localStorage.setItem("asesor", "yes")
              window.localStorage.setItem("user", this.form.usuario)

              this.$router.go()
              // this.$router.push({path: "/perfil"})
            } else{
              console.log("Contraseña incorrecta.");
            }
          }
        })
        if(logueado === false){
          console.log("Usuario no encontrado.");
        }
      })
    }
  },
  beforeCreate(){
    var auth = window.localStorage.getItem("auth")

    if(auth === "ok"){
      this.$router.push("/perfil")
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
