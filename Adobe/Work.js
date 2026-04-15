
//This code is Menu Bar.
let btnofmenu = document.getElementById("toggle");
let Opeen = document.querySelector(".Side-List");
let Layer = document.querySelector(".Layer");
let Opp = document.querySelector(".opacity");

btnofmenu.addEventListener("click", () => {
    Opeen.classList.toggle("Menu-of-Adobe");
    Layer.classList.toggle("Layer-js");
});

Opp.addEventListener("click", () => {
    Opeen.classList.remove("Menu-of-Adobe");
    Layer.classList.remove("Layer-js");
});
//Complete 


//This code is Bars of List.
let Menu = document.getElementById("Bars");

Menu.addEventListener("click", () => {
    let Black = document.querySelector(".Black");
    Black.classList.toggle("New");

    if (Menu.innerText == "X") {
        Menu.innerText = "☰";
    } else {
        Menu.innerText = "X";
    }
});
//Complete

let Sign = document.getElementById("sing");
Sign.addEventListener("click", () => {
    window.location.href = "Login.html";
});

//This code for Sign buttons
