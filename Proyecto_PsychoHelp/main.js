const app = Vue.createApp({
    data() {
        return {
            titulo: 'PyschoHelp',
            inicio: 'index.html',
            unete: 'unete.html',
            cantidad: 1000,
            enlace: 'https://youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false,
            mensaje: 'PsychoHelp, es un proyecto que busca ayudar a los usuarios con sus problemas de salud mental. ',
            mensaje1: '¿En qué puedo ayudarte?',
            enlace1: 'unete.html',
            n:'Nombre: ',
            a:'Apellido',
            email:'Correo Electrónico',
            sexo:'Sexo Biológico: *',
            usuario:'Usuario: ',
            contraseña:'Contraseña: ',
            inicio:'Iniciar sesión',
            registrar: 'Registrarse',
            fecha:'Fecha de Nacimiento:',
            re_contraseña:'Repetir contraseña:',
						cod_asesor:'Código único:',
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