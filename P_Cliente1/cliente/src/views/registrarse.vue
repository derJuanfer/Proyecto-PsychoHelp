<template>
  <v-container>
    <v-container>
      <form id="divp">
        <h2>Registrarse</h2>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          label="Nombre y Apellido"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Correo Electronico"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="sexo"
          :error-messages="selectErrors"
          label="Sexo"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de Nacimiento"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-text-field
          v-model="usuario"
          :error-messages="emailErrors"
          label="Usuario"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="contraseña"
          :error-messages="emailErrors"
          label="Contraseña"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="re_contraseña"
          :error-messages="emailErrors"
          label="Repetir Contraseña"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="llamarRegistrarse()"> Registrarse </v-btn>
      </form>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    llamarRegistrarse() {
      this.$router.push("/unete");
    },
    llamarForo() {
      this.$router.push("/foro");
    },
  },
};
</script>

<style lang="scss">
#divp {
  background-color: #e5ebff;
  margin-left: 25%;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 25%;
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

