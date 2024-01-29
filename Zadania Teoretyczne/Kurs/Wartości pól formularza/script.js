const form = document.querySelector("#myForm");

console.log(form.firstName.value);

form.lastName.value = "Kowalski";

form.message.value = "Treść";

console.log(form.subject.value);

form.subject.value = "Zgloszenie";

console.log(form.remember.checked);

form.remember.checked = true;


const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(event){
    event.preventDefault();
    wynik.innerHTML =" "
    wynik.innerHTML += form.firstName.value+" ";
    wynik.innerHTML += form.lastName.value+" <br/>";
    wynik.innerHTML += form.subject.value+" <br/>";
    wynik.innerHTML += form.message.value;
})