var icon = document.querySelector(".menu");
var meni = document.querySelector(".burger");
var divs = document.querySelectorAll(".textHolder");
var a = document.querySelectorAll(".textHolder>a")

icon.addEventListener("click", () => {
    meni.classList.toggle("hide");
    divs.forEach(element => {
        element.classList.toggle("hide");
    });
    a.forEach(element => {
        element.classList.toggle("hide");
    });
} );


meni.addEventListener("mouseleave", () => {
    meni.classList.toggle("hide");
    divs.forEach(element => {
        element.classList.toggle("hide");
    });
    a.forEach(element => {
        element.classList.toggle("hide");
    });
} );
