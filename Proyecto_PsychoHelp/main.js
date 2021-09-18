const app = Vue.createApp({
    data() {
        return {
            titulo: 'PyscoHelp',
            inicio: 'index.html',
            unete: 'unete.html',
            cantidad: 1000,
            enlace: 'https://youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false,
            mensaje: 'PsychoHelp, proyecto sobre salud mental que busca ayudar a los usuarios con sus problemas de salud mental. ',
            mensaje1: '¿En que puedo ayudarte?',
            enlace1: 'unete.html',
            n:'Nombre: ',
            a:'Apellido',
            email:'Correo Electronico',
            sexo:'Sexo Biologico: *',
            usuario:'Usuario: ',
            contraseña:'Contraseña: ',
            inicio:'Iniciar sesión',
            registrar: 'Registrarse',
            fecha:'Fecha de Nacimiento:',
            re_contraseña:'Repetir contraseña:',
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('saldo en cero!')
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }
})