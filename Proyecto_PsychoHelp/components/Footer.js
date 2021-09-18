app.component('footer-banco', {
    // props: ['valor', 'fecha'],
    props: {
        valor: Number,
        fechaBanco: String
    },
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
        <h3></h3>
        
    </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web dinamico',
        }
    }
})