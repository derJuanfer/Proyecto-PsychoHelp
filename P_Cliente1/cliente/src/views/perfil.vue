<template>
  <div class="container">
    <v-avatar
      color="teal darken-3"
      size="250"
      class="float-start ma-10"
    >
      <span class="white--text text-h5" right>{{ initials }}</span>
    </v-avatar>
    <div class="container mt-8 pr-8" id="divp">
      <h1 class="my-5">Tu perfil</h1>
      <p class="text-subtitle-1" v-if="asesor === 'yes'">
        <v-icon>mdi-star</v-icon>
        Asesor psicológico
        <v-icon>mdi-star</v-icon>
      </p>
      <div v-if="asesor != 'yes'">
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombres: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.nombres }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Apellidos: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.apellidos }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombre de usuario: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.usuario }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Correo electrónico: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.email }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Sexo biológico: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.sexo }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Fecha de nacimiento: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.fecha_nacimiento }}</p>
      </div>
      <div v-if="asesor === 'yes'">
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombres: </h2>
        <p class="text-left text-h5 mb-5">{{ p_asesor.nombres }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Apellidos: </h2>
        <p class="text-left text-h5 mb-5">{{ p_asesor.apellidos }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombre de usuario: </h2>
        <p class="text-left text-h5 mb-5">{{ p_asesor.usuario }}</p>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Correo electrónico: </h2>
        <p class="text-left text-h5 mb-5">{{ p_asesor.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        initials: "",
        user: window.localStorage.getItem("user"),
        auth: window.localStorage.getItem("auth"),
        id: window.localStorage.getItem("id"),
        asesor: window.localStorage.getItem("asesor"),
        usuario: [],
        p_usuario: {},
        p_asesor: {}
      }
    },
    created(){
      this.perfilUsuario(this.id)
      if(this.asesor === "yes"){
        this.perfilAsesor(this.id)
      }
    },
    methods:{
      getInitials(){
        this.initials = this.user[0].substring(0, 1).toUpperCase()
      },
      perfilUsuario(id) {
        this.axios.get(`nuevo_usuario/${id}`)
        .then(res => {
          this.p_usuario = res.data
          console.log(this.p_usuario);
        }) .catch(e => {
          console.log(e.response)
        })
      },
      perfilAsesor(id) {
        this.axios.get(`nuevo_asesor/${id}`)
        .then(res => {
          this.p_asesor = res.data
          console.log(this.p_asesor);
        }) .catch(e => {
          console.log(e.response)
        })
      },
    },
    beforeCreate(){
      var auth = window.localStorage.getItem("auth")

      if(auth != "ok"){
        this.$router.push("/unete")
      }
    },
    beforeMount(){
     this.getInitials()
    },
  }
</script>

<style>
  #divp {
    background-color: #dce2f3;
    margin-block-start: 4%;
    margin-left: 30%;
    padding: 4%;
    text-align: center;
    border-radius: 40px;
    color: #474747;
    max-width: 70%;
  }
</style>
