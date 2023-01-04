class Ninja {

    constructor(name, health = 0, speed = 3, force = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.force = force
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Ninja, Name: ${this.name}, Force: ${this.force}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();