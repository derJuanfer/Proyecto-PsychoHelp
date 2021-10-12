<template>
  <v-container>
    <form id="divp">
      <v-card>
        <v-toolbar flat color="#00C4D0" dark>
          <v-toolbar-title>Foro de dudas</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field filled label="Titulo" value=""></v-text-field>

          <v-textarea filled label="Texto" value=""></v-textarea>

          <v-divider class="my-2"></v-divider>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" depressed> Añadir </v-btn>
        </v-card-actions>
      </v-card>
    </form>
    <br />
    <v-card class="overflow-hidden" color="#9ad5d8" id="v-card">
      <v-toolbar flat color="white">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
          User Profile
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="success">
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
        <v-btn color="red">
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field color="black" label="Titulo"></v-text-field>
        <v-text-field color="black" label="Descripción"></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="save"> Guardar </v-btn>
        <div class="text-center" style="margin-right: 10%; padding: 5px">
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="orange" dark v-bind="attrs" v-on="on">
                Comentar
              </v-btn>
            </template>
            <v-sheet class="text-center" height="200px">
              <v-card-text>
                <h2>Agrega tu aporte</h2>
                <v-text-field label="Comentario">Comentario</v-text-field>
              </v-card-text>
              <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                Agregar
              </v-btn>
            </v-sheet>
          </v-bottom-sheet>
        </div>
      </v-card-actions>
      <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Tu publicación ha sido actualizada
      </v-snackbar>
    </v-card>
  </v-container>
</template>




<style lang="scss">
#v-card {
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 15%;
  margin-left: 15%;
  padding: 0px;
  text-align: unset;
  border-radius: 20px;
}
#divp {
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 25%;
  padding: 0px;
  text-align: unset;
  border-radius: 40px;
  color: #b44141;
  // color: #9ad5d8;
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
  border: 0px;
  width: 150px;
  height: 30px;
}
</style>
<script>
export default {
  data: () => ({
    sheet: false,
  }),
};
</script>