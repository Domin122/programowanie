const form = document.querySelector(`#form`)
const wynik = document.querySelector(`#wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener('click', function() {
    sprawdz(form);
});

function sprawdz(form) {
    let nick = form.nick.value;
    let mail = form.mail.value;
    let haslo = form.haslo.value;
    let haslo2 = form.haslo2.value;

    if (nick === "") {
        alert('Podaj nazwę użytkownika.')
        form.nick.focus();
        return false;
    }

    let regex_mail = /^[a-zA-Z0-9._%+-]+@zspglogow\.pl$/;
    if (!regex_mail.test(mail)) {
        alert('Podaj prawidłowy adres e-mail z domeną zspglogow.pl.');
        form.mail.focus();
        return false;
    }

    let regex_haslo = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (haslo.length < 8 || !regex_haslo.test(haslo)) {
        alert('Podaj hasło składające się z minimum 8 znaków, zawierające małe i duże litery, cyfry oraz znaki specjalne (@$!%*?&)');
        form.haslo.focus();
        return false;
    }

    if (haslo !== haslo2) {
        alert('Podane hasła nie są takie same.');
        form.haslo2.focus();
        return false;
    }

    wynik.innerHTML = `${nick}<br>${mail}<br>${haslo}`;
    return true;
}

