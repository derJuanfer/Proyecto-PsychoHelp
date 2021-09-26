<template>
  <v-container>
    <form id="divp">
    <v-card>
      <v-toolbar flat color="#00C4D0" dark>
        <v-toolbar-title >Foro de dudas</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-text-field filled label="Titulo" value=""></v-text-field>

        <v-textarea
          filled
          label="Texto"
          value=""
        ></v-textarea>

        <v-divider class="my-2"></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed> Añadir </v-btn>
      </v-card-actions>
    </v-card>
    </form>
  </v-container>
</template>


<style lang="scss">
#divp {
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 25%;
  padding: 0px;
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