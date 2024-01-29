//zad4

class Rycerz{
    nazwisko
    doswiadczenie
    uzbrojenie

    constructor(nazwisko,doswiadczenie,uzbrojenie) {
        this.nazwisko = nazwisko
        this.doswiadczenie = doswiadczenie
        this.uzbrojenie = uzbrojenie
    }
    info = function () {
        console.log(`Ten Ryczerz to ${this.nazwisko} ma ${this.doswiadczenie} lat doswiadczenia i jego uzbrojenie to ${this.uzbrojenie}`)
    }
    dodaj_uzbrojenie = function (uzbrojenie) {
        let stare_uzbrojenie = this.uzbrojenie
        this.uzbrojenie = uzbrojenie
        console.log(`${uzbrojenie}`)
    }
}

let rycerz1 = new Rycerz("Śmiały", 5)
rycerz1.info()
rycerz1.dodaj_uzbrojenie("żelazna zbroja")
let rycerz2 = new Rycerz("Wielki", 6,"Żelazna zbroja")
rycerz2.info()