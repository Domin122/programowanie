let wynik = document.querySelector('#wynik');
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = 45;
    let b = 40;

const schemat = (a, b) => {
    while (a!==b) {
        if (a>b)
            a = a - b;
        else
            b = b - a;
    }
    wynik.innerHTML = `${a}`
    console.log(a)
}
schemat(a,b)
});