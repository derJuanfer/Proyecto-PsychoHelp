<template>
  <div class="container">
      <div class="my-5" v-if="auth != 'ok'">
        <h2 class="text-h3">
          <v-icon>mdi-alert-decagram</v-icon>
          Estás en modo invitado
          <v-icon>mdi-alert-decagram</v-icon>
        </h2>
        <span class="text-h6">Para interactuar con el foro debes iniciar sesión.</span>
      </div>
    <v-btn
      class="white--text my-5"
      v-if="ac_crearForo === false && auth === 'ok'"
      color="teal darken-4"
      @click="ac_crearForo = true"
    >
      <v-icon class="mx-1">mdi-note-plus</v-icon>
      Iniciar un tema de discusión
    </v-btn>
    <div v-if="ac_crearForo === true">
      <h1 class="my-5">Inicia un nuevo tema de discusión</h1>
      <v-card class="overflow-hidden" color="#9ad5d8" id="v-card">
        <v-toolbar flat color="#9ad5d8">
          <v-text-field
            v-model="foro.titulo"
            class="mt-6 mx-5 text-h5 font-weight-bold"
            color="black"
            label="Titulo"></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-textarea
            v-model="foro.texto"
            class="mx-5 text-body-1"
            color="black"
            label="Descripción"
          ></v-textarea>
        </v-card-text>

        <v-divider class="mx-8"></v-divider>

        <v-card-actions class="mx-8">
          <v-spacer></v-spacer>
          <v-btn
            @click="crearForo()"
          >
            <v-icon class="mx-1">mdi-note-check</v-icon>
            Publicar
          </v-btn>
          <v-btn
            color="teal darken-4"
            class="white--text"
            @click="ac_crearForo = false"
          >
            <v-icon class="mx-1">mdi-note-remove</v-icon>
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <v-divider style = "margin-left: 1%; margin-right: 1%"></v-divider>

    <h1 class="my-5">Foro de discusión</h1>
    <v-list three-line class="pa-2">
      <template v-for="(item, index) in foros">
        <v-list-item :key="item.titulo">
          <v-list-item-content>
            <v-card class="overflow-hidden" color="#9ad5d8" id="v-card">
              <v-card-title flat color="#9ad5d8">
                <h2 class="mx-2">
                  {{ item.titulo }}
                </h2>
                <v-spacer></v-spacer>
                <span>Por: {{ item.usuario }}</span>
              </v-card-title>
              <v-card-subtitle flat color="#9ad5d8">
                <p class="text-right my-1">Fecha de publicación: {{ item.fecha_publicacion }}</p>
              </v-card-subtitle>
              <v-divider :key="index" style = "margin-left: 1%; margin-right: 1%"></v-divider>
              <v-card-text>
                <p class="text-left text-body-1 text--primary">{{ item.texto }}</p>
              </v-card-text>
              <v-divider style = "margin-left: 1%; margin-right: 1%"></v-divider>
              <v-card-text>
                <p class="text-left text-body-1 text--primary">Aún intento descubrir cómo hacer que los comentarios aparezcan sólo en el foro del que vienen: </p>
                <v-list three-line class="pa-2" >
                  <template v-for="(item, index) in comentarios">
                    <v-list-item :key="item.contenido">
                      <v-list-item-content>
                        {{ item.contenido }}
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="index" style = "margin-left: 1%; margin-right: 1%"></v-divider>
                  </template>
                </v-list>
              </v-card-text>
              <div v-if="auth === 'ok'">
                <v-divider class="my-5" style = "margin-left: 1%; margin-right: 1%"></v-divider>
                <v-card-text>
                  <v-text-field
                    v-model="comentario.contenido"
                    class="mt-6 mx-5 text-body-1"
                    color="black"
                    label="Comentario"></v-text-field>
                  <v-btn
                    @click="comentar(), comentario.id_foro = item._id"
                    >
                    <v-icon class="mx-1">mdi-note-check</v-icon>
                    Publicar comentario
                  </v-btn>
                </v-card-text>
              </div>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        foro:{
          titulo: "",
          texto: "",
          usuario: window.localStorage.getItem("user"),
        },
        comentario: {
          contenido: "",
          usuario: window.localStorage.getItem("user"),
          id_foro: ""
        },
        foros: [],
        comentarios: [],
        user: window.localStorage.getItem("user"),
        auth: window.localStorage.getItem("auth"),
        id: window.localStorage.getItem("id"),
        asesor: window.localStorage.getItem("asesor"),
        ac_crearForo: false
      }
    },
    methods:{
      crearForo(){
        this.axios.post('nuevo_foro', this.foro)
        .then(res => {
          this.foro.titulo = ""
          this.foro.texto = ""
          this.ac_crearForo = false
          console.log(res.data)
          this.$router.go()
        })
        .catch(e => {
          console.log(e.response);
        })
      },
      mostrarForos(){
        this.axios.get('nuevo_foro')
        .then(res =>{
          console.log(res.data);
          this.foros = res.data
        })
        .catch(e => {
          console.log(e.response);
        })
      },
      comentar(){
        this.axios.post('comentario', this.comentario)
        .then(res => {
          this.comentario.contenido = ""
          console.log(res.data);
          this.$router.go()
        })
        .catch(e => {
          console.log(e.response);
        })
      },
      mostrarComentarios(){
        this.axios.get('comentario')
        .then(res =>{
          console.log(res.data);
          this.comentarios = res.data
        })
        .catch(e => {
          console.log(e.response);
        })
      },
    },
    beforeMount(){
      this.mostrarForos()
      this.mostrarComentarios()
    }
  }
</script>

<style>
  #v-card {
    margin-block-start: 20px;
    margin-block-end: 20px;
    padding: 10px;
    text-align: unset;
    border-radius: 20px;
  }
</style>
