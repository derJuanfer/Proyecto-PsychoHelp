<template>
  <v-container>
    <form id="divp" @submit.prevent="crearAsesor()">
      <h2>Registrarse</h2>
      <v-text-field
        v-model="asesor.nombres"
        :counter="30"
        :rules="[rules.required]"
        label="Nombres"
        required
      ></v-text-field>
      <v-text-field
        v-model="asesor.apellidos"
        :counter="30"
        :rules="[rules.required]"
        label="Apellidos"
        required
      ></v-text-field>
      <v-text-field
        v-model="asesor.usuario"
        :counter="30"
        :rules="[rules.required]"
        label="Usuario"
        required
      ></v-text-field>
      <v-text-field
        v-model="asesor.email"
        :rules="[rules.required, rules.email]"
        label="Correo Electronico"
        required
      ></v-text-field>
      <v-text-field
        v-model="asesor.contraseña"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password, rules.length(8)]"
        :type="show1 ? 'text' : 'password'"
        label="Contraseña"
        required
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
        v-model="asesor.re_pass"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, re_passRule]"
        :type="show2 ? 'text' : 'password'"
        label="Repetir Contraseña"
        required
        @click:append="show2 = !show2"
      ></v-text-field>
      <v-text-field
        v-model="asesor.codigo_unico"
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show3 ? 'text' : 'password'"
        label="Código único de acceso"
        required
        @click:append="show3 = !show3"
      ></v-text-field>
      <v-checkbox
        label="He leído y acepto los términos y condiciones."
        required
      ></v-checkbox>

      <v-btn class="mb-5" color="white" elevation="2" type="submit">Registrarse</v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      asesor:{
        nombres: "",
        apellidos: "",
        usuario: "",
        email: "",
        contraseña: "",
        codigo_unico: "",
      },
      re_pass: "",
      password: undefined,
      show1: false,
      show2: false,
      show3: false,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Por favor, ingrese un correo válido.',
        length: len => v => (v || '').length >= len || `La contraseña debe tener al menos ${len} caracteres.`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/) || 'La contreña debe incluir al menos una mayúscula y un número.',
        required: v => !!v || 'Campo obligatorio.',
      }
    }
  },
  methods: {
    llamarRegistrarse(){
      this.$router.push('/unete')
    },
    llamarForo(){
      this.$router.push('/foro')
    },
    crearAsesor(){
      this.axios.post('nuevo_asesor', this.asesor)
      .then(res => {
        this.asesor.nombres = ""
        this.asesor.apellidos = ""
        this.asesor.usuario = ""
        this.asesor.email = ""
        this.asesor.contraseña = ""
        this.asesor.codigo_unico = ""
        this.re_pass = ""
        this.showAlert()
        console.log(res.data)
      })
      .catch(e => {
        console.log(e.response);
      })
      this.$router.push("/unete")
    },
  },
  computed: {
    re_passRule() {
      return () => (this.usuario.contraseña === this.re_pass) || 'Las contraseñas no coinciden.'
    }
  },
  beforeCreate(){
    var auth = window.localStorage.getItem("auth")

    if(auth === "ok"){
      this.$router.push("/perfil")
    }
  },
};
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
