//Search for airport in certain radius
function locSearch() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var dot1 = document.getElementById("d1");
    var dot2 = document.getElementById("d2");

    page1.style.display = "none";
    page2.style.display = "block";
    dot1.className = "fa-regular fa-circle";
    dot2.className = "fas fa-circle";
}


//Search for nearby airports
function nearbySearch() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var dot1 = document.getElementById("d1");
    var dot2 = document.getElementById("d2");

    page1.style.display = "none";
    page2.style.display = "block";
    dot1.className = "fa-regular fa-circle";
    dot2.className = "fas fa-circle";
}

//Searches for flights 
function flightSearch() {
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var dot2 = document.getElementById("d2");
    var dot3 = document.getElementById("d3");

    page2.style.display = "none";
    page3.style.display = "block";
    dot2.className = "fa-regular fa-circle";
    dot3.className = "fas fa-circle";    
}

//Displays arrivingl/departing flights
function seeFlights() {
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    var dot3 = document.getElementById("d3");
    var dot4 = document.getElementById("d4");

    page3.style.display = "none";
    page4.style.display = "block";
    dot3.className = "fa-regular fa-circle";
    dot4.className = "fas fa-circle";    
    
    displayFlights();
}

//Displays flights (used after refreshing)
function displayFlights() {

}

/*
function getAirports() { //Gets airports with IATA code
    var airData= require('./airports.json'); 
    var airports = [];
    for(let i = 0; i < airData["airports"].length; i++) {
        if("iata_code" in airData["airports"][i]){
            airports.push(airData["airports"][i]);
        }
    }
    return airports;
}

function getFlights() {
    var depData = require('./flights.json');
    return depData["departures"];
}*/

