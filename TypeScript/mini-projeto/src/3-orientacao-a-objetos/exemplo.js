class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Player extends User {
    constructor(name, age, game) {
        super(name, age)

        this.game = game
    }
}

const jogador = new Player('Doxesz', 23, 'Path of Exile')
console.log(jogador)