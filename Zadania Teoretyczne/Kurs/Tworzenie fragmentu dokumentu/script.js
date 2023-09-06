const list = document.querySelector("#list");
const list1 = document.querySelector("#list1");

 for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element listy ${i + 1}`));

     list.append(li);
 }

const dc = document.createDocumentFragment();

for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element drugiej listy ${i + 1}`));

    dc.append(li);
}

list.append(dc);
list1.append(list);
