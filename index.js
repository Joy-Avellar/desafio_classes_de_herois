class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let tipo = this.tipo;
        let nome = this.nome;
        if (tipo === "guerreiro") {
            console.log(`o guerreiro ${nome} atacou usando espada`)
        } else if (tipo === "mago") {
            console.log(`o mago ${nome} atacou usando magia`)
        } else if (tipo === "monge") {
            console.log(`o monge ${nome} atacou usando artes marciais`)
        } else if (tipo === "ninja") {
            console.log(`o ninja ${nome} atacou usando shuriken`)
        }

    }

}

let ninja = new heroi("Sol", 25, "ninja")
let mago = new heroi("Lua",35, "mago")

ninja.atacar()
mago.atacar()