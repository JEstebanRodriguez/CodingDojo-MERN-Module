class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, resilience, power) {
        super(name, cost)
        this.resilience = resilience
        this.power = power
    }
    attack(target) {
        //reduce target resiliance by power
        if (target instanceof Unit) {
            target.resilience -= this.power
        } else {
            throw new Error('Target must be a unit!')
        }
    }
}

const ninja1 = new Unit('Ninja Cinturon Rojo', 3, 4, 3)
const ninja2 = new Unit('Ninja Cinturon Negro', 4, 4, 5)
ninja1.attack(ninja2)

class Effect extends Card {

    constructor(name, cost, stat, magnitude, text) {
        super(name, cost)
        this.stat = stat
        this.magnitude = magnitude
        this.text = ''
    }
    play(target) {
        if (target instanceof Unit) {
            // implementa el texto de carta aquí
            if (this.name == 'Algoritmo Dificil') {
                target.resilience += 3
                this.text = 'aumentar la resistencia del objetivo en 3'
            } else if (this.name == 'Rechazo de promesa no manejado') {
                target.resilience -= 2
                this.text = 'reducir la resilienvia del objetivo en 2'
            } else if (this.name == 'Programacion en pareja') {
                target.power += 2
                this.text = 'aumentar el poder del objetivo en 2'
            }
        } else {
            throw new Error('Target must be a unit!')
        }
    }

}

const effect1 = new Effect('Algoritmo Dificil', 2, 'resiliencia', 3)
const effect2 = new Effect('Rechazo de promesa no manejado', 1, 'resiliencia', 2)
const effect3 = new Effect('Programacion en pareja', 3, 'poder', 2)