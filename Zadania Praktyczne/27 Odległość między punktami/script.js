const l_x1 = document.querySelector('#x1');
const l_y1 = document.querySelector('#y1');
const l_x2 = document.querySelector('#x2');
const l_y2 = document.querySelector('#y2');
const l_x3 = document.querySelector('#x3');
const l_y3 = document.querySelector('#y3');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let x1 =parseInt(l_x1.value);
    let y1 =parseInt(l_y1.value);
    let x2 =parseInt(l_x2.value);
    let y2 =parseInt(l_y2.value);
    let x3 =parseInt(l_x3.value);
    let y3 =parseInt(l_y3.value);

    let p1 = Math.pow(x1-x2,2) + Math.pow(y1-y2,2)
    let d1 = Math.sqrt(p1);
    let p2 = Math.pow(x2-x3,2) + Math.pow(y2-y3,2)
    let d2 = Math.sqrt(p2);
    let p3 = Math.pow(x1-x3,2) + Math.pow(y1-y3,2)
    let d3 = Math.sqrt(p3);
    wynik.innerHTML = `Odległość między tymi punktami P1 i P2 wynosi:${d1} <br>`
    wynik.innerHTML += `Odległość między tymi punktami P1 i P3 wynosi:${d3} <br>`
    wynik.innerHTML += `Odległość między tymi punktami P2 i P3 wynosi:${d2} <br>`


});