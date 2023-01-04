class Ninja {
    constructor(name, health = 0, speed = 3, force = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.force = force
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`Name: ${this.name}, Force: ${this.force}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, sabiduria = 10) {
        super('', 200, 10, 10)
        this.name = name
        this.sabiduria = sabiduria
    }
    speakWisdom() {
        super.drinkSake()
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()