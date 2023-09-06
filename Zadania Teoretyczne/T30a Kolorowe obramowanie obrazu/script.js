function changeBorderColor() {
    let image = document.getElementById("img");
    let borderColor = document.getElementById("borderColor").value;
    image.style.border = "2px solid";
    image.style.borderColor = borderColor;
}

let borderRange = document.getElementById("borderRange");
let borderWidthDisplay = document.getElementById("borderWidthDisplay");
borderWidthDisplay.innerHTML = borderRange.value;

borderRange.oninput = function() {
    let image = document.getElementById("img");
    let borderWidth = borderRange.value;
    borderWidthDisplay.innerHTML = borderWidth;
    image.style.border = borderWidth;
}