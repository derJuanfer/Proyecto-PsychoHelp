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
      <h1>{{ user }}</h1>
      <p class="text-subtitle-1" v-if="asesor === 'yes'">
        <v-icon>mdi-star</v-icon>
        Asesor psicológico
        <v-icon>mdi-star</v-icon>
      </p>
      <div v-if="asesor != 'yes'">
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombres: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.nombres }}</p>
        <v-text-field
          v-model="ed_usuario.nombres"
          v-if="editarUs === true"
          :counter="30"
          class="mb-5 mr-5"
          label="Nombres actualizados:"
          required
        ></v-text-field>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Apellidos: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.apellidos }}</p>
        <v-text-field
          v-model="ed_usuario.apellidos"
          v-if="editarUs === true"
          :counter="30"
          class="mb-5 mr-5"
          label="Apellidos actualizados:"
          required
        ></v-text-field>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Nombre de usuario: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.usuario }}</p>
        <v-text-field
          v-model="ed_usuario.usuario"
          v-if="editarUs === true"
          :counter="20"
          class="mb-5 mr-5"
          label="Nombre de usuario actualizado:"
          required
        ></v-text-field>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Correo electrónico: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.email }}</p>
        <v-text-field
          v-model="ed_usuario.email"
          v-if="editarUs === true"
          class="mb-5 mr-5"
          label="Correo electrónico actualizado:"
          required
        ></v-text-field>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Sexo biológico: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.sexo }}</p>
        <v-select
          v-model="ed_usuario.sexo"
          v-if="editarUs === true"
          :items="sexo"
          label="Sexo biológico actualizado"
          required
        ></v-select>
        <v-divider style = "margin-left: 5%; margin-right: 5%"></v-divider>
        <h2 class="text-left mt-5">Fecha de nacimiento: </h2>
        <p class="text-left text-h5 mb-5">{{ p_usuario.fecha_nacimiento }}</p>
        <template>
          <div>
            <v-menu
              ref="menu"
              v-model="menu"
              v-if="editarUs === true"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="ed_usuario.fecha_nacimiento"
                  label="Fecha de nacimiento actualizada"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="ed_usuario.fecha_nacimiento"
                :active-picker.sync="activePicker"
                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                min="1920-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </div>
        </template>
        <v-btn
          v-if="editarUs === false"
          class="white--text"
          color="teal darken-4"
          @click="activarEdicionUs()"
        >
          <v-icon>mdi-account-edit</v-icon>
          Editar datos personales
        </v-btn>
        <v-btn
          v-if="editarUs === true"
          class="white--text mx-2"
          color="blue lighten-2"
          @click="editarUsuario(id, ed_usuario)"
        >
          <v-icon>mdi-checkbox-marked</v-icon>
          Confirmar edición
        </v-btn>
        <v-btn
          v-if="editarUs === true"
          class="white--text mx-2"
          color="amber darken-4"
          @click="editarUs = false"
        >
          <v-icon>mdi-close-box</v-icon>
          Cancelar edición
        </v-btn>
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
        p_asesor: {},
        editarUs: false,
        ed_usuario: {},
        sexo: ["Masculino", "Femenino", "Otro"],
        watch: {
          menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
          }
        },
        activePicker: null,
        date: null,
        menu: false,
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
      activarEdicionUs(){
        this.editarUs = true
      },
      save (date) {
        this.$refs.menu.save(date)
      },
      editarUsuario(id, item){
        this.axios.put(`nuevo_usuario/${id}`, item)
        .then(res => {
          console.log(res.data);
        })
        .catch(e => {
          console.log(e.response);
        })
        window.localStorage.setItem("user", this.ed_usuario.usuario)
        this.$router.go()
      }
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
