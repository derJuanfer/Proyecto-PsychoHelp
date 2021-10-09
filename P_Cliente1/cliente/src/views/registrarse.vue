<template>
  <v-container>
    <form id="divp" @submit.prevent="crearUsuario()">
      <h2>Registrarse</h2>
      <v-text-field
        v-model="usuario.nombres"
        :counter="30"
        :rules="[rules.required]"
        label="Nombres"
        required
      ></v-text-field>
      <v-text-field
        v-model="usuario.apellidos"
        :counter="30"
        :rules="[rules.required]"
        label="Apellidos"
        required
      ></v-text-field>
      <v-text-field
        v-model="usuario.usuario"
        :counter="20"
        :rules="[rules.required]"
        label="Usuario"
        required
      ></v-text-field>
      <v-text-field
        v-model="usuario.email"
        :rules="[rules.required, rules.email]"
        label="Correo Electronico"
        required
      ></v-text-field>
      <v-select
        v-model="usuario.sexo"
        :items="sexo"
        :rules="[rules.required]"
        label="Sexo biológico"
        required
      ></v-select>
      <template>
        <div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="usuario.fecha_nacimiento"
                :rules="[rules.required]"
                label="Fecha de nacimiento"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="usuario.fecha_nacimiento"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1920-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
      </template>
      <v-text-field
        v-model="usuario.contraseña"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password, rules.length(8)]"
        :type="show1 ? 'text' : 'password'"
        label="Contraseña"
        required
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
        v-model="re_pass"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, re_passRule]"
        :type="show2 ? 'text' : 'password'"
        label="Repetir Contraseña"
        required
        @click:append="show2 = !show2"
      ></v-text-field>
      <v-checkbox
        label="He leído y acepto los términos y condiciones."
        required
      ></v-checkbox>
      <v-btn class="mb-5" color="white" elevation="2" type="submit">Registrarse</v-btn>
      <br>
      <a @click="llamarRegistroAsesor()">¿Eres un asesor psicológico? Registrate aquí.</a>
    </form>
  </v-container>
</template>

<script>
  export default{
    data (){
      return{
        usuario:{
          nombres: "",
          apellidos: "",
          email: "",
          usuario: "",
          fecha_nacimiento: "",
          contraseña: ""
        },
        watch: {
          menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
          }
        },
        sexo: ["Masculino", "Femenino", "Otro"],
        activePicker: null,
        date: null,
        menu: false,
        password: undefined,
        show1: false,
        show2: false,
        rules: {
          email: v => !!(v || '').match(/@/) || 'Por favor, ingrese un correo válido.',
          length: len => v => (v || '').length >= len || `La contraseña debe tener al menos ${len} caracteres.`,
          password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/) || 'La contreña debe incluir al menos una mayúscula y un número.',
          required: v => !!v || 'Campo obligatorio.',
        },
      }
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      crearUsuario(){
        console.log(this.usuario)
        this.axios.post('nuevo_usuario', this.usuario)
        .then(res => {
          this.usuario.nombres = ""
          this.usuario.apellidos = ""
          this.usuario.usuario = ""
          this.usuario.email = ""
          this.usuario.sexo = ""
          this.usuario.fecha_nacimiento = ""
          this.showAlert()
          console.log(res.data)
        })
        .catch(e => {
          console.log(e.response);
        })
      },
      llamarRegistroAsesor() {
        this.$router.push("/registro_asesor");
      },
    },
    computed: {
      re_passRule() {
        return () => (this.usuario.contraseña === this.re_pass) || 'Las contraseñas no coinciden.'
      }
    }
  }
</script>

<style lang="scss">
#divp {
  background-color: #e5ebff;
  margin-left: 20%;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-right: 20%;
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
