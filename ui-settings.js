//Toggles between light and dark mode
function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var bIcon = document.getElementById("mode-icon");
    if(bIcon.className == "fas fa-sun") {
        bIcon.className = "fas fa-moon";
    }else{
        bIcon.className = "fas fa-sun";
    }
}

//Goes from page 2 to page 1
function navBack21() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var dot1 = document.getElementById("d1");
    var dot2 = document.getElementById("d2");

    page1.style.display = "block";
    page2.style.display = "none";
    dot1.className = "fas fa-circle";
    dot2.className = "fa-regular fa-circle";
}

//Goes from page 3 to page 2
function navBack32() {
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var dot2 = document.getElementById("d2");
    var dot3 = document.getElementById("d3");

    page2.style.display = "block";
    page3.style.display = "none";
    dot2.className = "fas fa-circle";
    dot3.className = "fa-regular fa-circle";
}

function searchAgain() {
    var page1 = document.getElementById("page1");
    var page4 = document.getElementById("page4");

    var dot1 = document.getElementById("d1");
    var dot2 = document.getElementById("d2");
    var dot3 = document.getElementById("d2");
    var dot4 = document.getElementById("d4");

    page1.style.display = "block";
    page4.style.display = "none";
    dot1.className = "fas fa-circle";
    dot2.className = "fa-regular fa-circle";
    dot3.className = "fa-regular fa-circle";
    dot4.className = "fa-regular fa-circle";
}