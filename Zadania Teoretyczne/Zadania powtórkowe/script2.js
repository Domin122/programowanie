//Zadanie 2

class wojownik {
    nazwa
    punkty_doswiadczenia
    punkty_zycia
    uzbrojenie

    constructor(nazwa, punkty_doswiadczenia,punkty_zycia,uzbrojenie) {
        this.nazwa = nazwa
        this.punkty_doswiadczenia = punkty_doswiadczenia
        this.punkty_zycia = punkty_zycia
        this.uzbrojenie = uzbrojenie
    }

    add_uzbrojenie = function (uzbrojenie) {
        let stare_uzbrojenie = this.uzbrojenie
        this.uzbrojenie = uzbrojenie
        console.log(`${uzbrojenie}`)
    }
    info = function () {
        console.log(`Ten wojownik to ${this.nazwa} ma ${this.punkty_doswiadczenia} punktów doswiadczenia i ${this.punkty_zycia} punktów życia, jego uzbrojenie to`)
    }
}

let Mieszko = new wojownik("Mieszko", 5,0.6)

Mieszko.info()
Mieszko.add_uzbrojenie("szyszak")