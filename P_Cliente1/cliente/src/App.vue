<template>
  <v-app>
    <v-app-bar app color="#00C4D0" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="assets/Tyni.png"
          transition="scale-transition"
          width="100px"
        />
        <span class="mr-2">PyschoHelp</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="/" text>
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-spacer>
        <v-btn @click="llamarForo()">
          <span class="mr-2">Foro</span>
        </v-btn>
      </v-spacer>

      <v-btn @click="llamarUnete()">
        <span class="mr-2">Únete</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — PyschoHelp<strong></strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    llamarUnete(){
      this.$router.push('/unete')
    },
    llamarForo(){
      this.$router.push('/foro')
    }
  },
};
</script>
