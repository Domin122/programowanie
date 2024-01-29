class Czolg {
    name
    color
    ammunition = 30
    calibre = 76

    constructor(nazwa, color) {
        this.name = nazwa
        this.color = color
    }

    changeColor = function (kolor) {
        let stary_kolor = this.color
        this.color = kolor
        document.write(`Zmieniono kolor czołgu z ${stary_kolor} na ${kolor}.<br>`)
    }

    shoot = function () {
        if (this.ammunition !== 0) {
            document.write(`Booom!<br>Zostało ${this.ammunition} amunicji.<br>`);
            this.ammunition -= 1;
        }
        else {
            document.write("Brak amunicji! Przeładuj!")
        }
    }

    reload = function () {
        document.write(`Przeładowano, Można strzelać!<br>`)
        this.ammunition = 10
    }

    info = function () {
        document.write(`${this.name}<br>Kaliber: ${this.calibre}<br>Kolor: ${this.color}<br>Amunicja: ${this.ammunition}`)
    }
}

let czolg = new Czolg("T34M", "czarny")

czolg.shoot()

czolg.reload()

czolg.changeColor("brązowy")

czolg.shoot()
czolg.shoot()
czolg.shoot()

czolg.info()