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
      <v-btn class="mx-1"  @click="llamarUnete()">
        <span style="font-size: 20px">Únete</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

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
    
  },
  methods: {
    llamarUnete() {
      this.$router.push("/unete");
    },
    llamarForo() {
      this.$router.push("/foro");
    },
  },
};
</script>
