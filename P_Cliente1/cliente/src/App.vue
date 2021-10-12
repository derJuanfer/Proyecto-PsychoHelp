<template>
  <v-app>
    <v-app-bar app color="#00C4D0" dark>
      <div class="d-flex justify-end">
        <v-img
          alt="Logo Tiny"
          class="shrink mr-2"
          contain
          src="./assets/cabeza_Tyni.png"
          transition="scale-transition"
          width="55px"
        />
        <span class="mr-2" style="font-size: 40px">PyschoHelp</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="mx-1" href="/" text>
        <span style="font-size: 20px">Inicio</span>
      </v-btn>
      <v-btn class="mx-1" @click="llamarForo()" text>
        <span style="font-size: 20px">Foro</span>
      </v-btn>

      <!-- El botón aparece si está logueado -->
      <v-app-bar-nav-icon class="mx-1" @click.stop="drawer = !drawer" v-if="this.auth === 'ok'">
        <v-avatar
          color="teal darken-3"
        >
          <span class="white--text text-h5" right>{{ initials }}</span>
        </v-avatar>
      </v-app-bar-nav-icon>

      <!-- El botón aparece si no está logueado -->
      <v-btn class="mx-1"  @click="llamarUnete()" v-else>
        <span style="font-size: 20px">Únete</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        temporary
      >
        <v-list-item class="my-4">
          <v-avatar
            color="teal darken-3"
          >
            <span class="white--text text-h5" right>{{ initials }}</span>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ this.user }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mx-2"></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
          >
            <v-list-item @click="llamarPerfil()">
              <v-list-item-icon class="mx-2">
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Mi perfil</v-list-item-title>
            </v-list-item>

            <!-- <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item> -->

          </v-list-item-group>
        </v-list>

        <v-spacer></v-spacer>

        <div class="pa-2">
          <v-btn
            block color="teal darken-4"
            class="white--text"
            @click="cerrarSesion()"
          >
            CERRAR SESIÓN
          </v-btn>
        </div>
      </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          ©{{ new Date().getFullYear() }} - Proyecto PyschoHelp<strong></strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data (){
    return{
      drawer: false,
      group: null,
      initials: "",
      user: window.localStorage.getItem("user"),
      auth: window.localStorage.getItem("auth")
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    llamarUnete() {
      this.$router.push("/unete");
    },
    llamarForo() {
      this.$router.push("/foro");
    },
    llamarPerfil(){
      this.$router.push("/perfil")
    },
    getInitials(){
      this.initials = this.user[0].substring(0, 1).toUpperCase()
    },
    cerrarSesion(){
      window.localStorage.removeItem("auth")
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("asesor")
      this.$router.go()
      this.$router.push({path: "/"})
    }
  },
  beforeCreate(){

  },
  beforeMount(){
   this.getInitials()
  },
};
</script>
