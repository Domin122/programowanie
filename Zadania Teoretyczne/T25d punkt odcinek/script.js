class Punkt {
    constructor(nazwa, wspolrzedna_x, wspolrzedna_y) {
        this.nazwa = nazwa
        this.x = wspolrzedna_x
        this.y = wspolrzedna_y
    }

    info() {
        document.write(`Punkt ${this.nazwa} ma współrzędne (${this.x},${this.y})`)
    }
}

class Odcinek {
    constructor(nazwa, punkt_1, punkt_2) {
        this.nazwa = nazwa
        this.punkt1 = punkt_1
        this.punkt2 = punkt_2
    }

    info1() {
        document.write(`Odcinek o punktach ${this.punkt1.nazwa} i ${this.punkt2.nazwa} ma długość ${this.dlugosc()}`)
    }

    dlugosc() {
        return Math.sqrt(Math.pow((this.punkt2.x - this.punkt1.x), 2) + Math.pow((this.punkt2.y - this.punkt1.y), 2));
    }

}

let A = new Punkt("A", 6, 4)
let B = new Punkt("B", 3, 6)

A.info()
document.write(`<br>`)
B.info()
document.write(`<br>`)

let AB = new Odcinek("AB", A, B)

AB.info1()
