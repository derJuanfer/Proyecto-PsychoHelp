<template>
  <div class="container">
    <h1>Bienvenido</h1>

    <div class="container">
      <v-btn elevation="2" color="red" @click="cerrarSesion()">Cerrar sesión</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    beforeCreate(){
      var auth = window.localStorage.getItem("auth")

      if(auth != "ok"){
        this.$router.push("/unete")
      }
    },
    methods: {
      cerrarSesion(){
        window.localStorage.removeItem("auth")
        this.$router.push({path: "/"})
      }
    }
  }
</script>

<style>
</style>
