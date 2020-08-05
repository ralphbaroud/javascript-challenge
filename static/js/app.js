// from data.js

var tableData = data;

// YOUR CODE HERE!
var bodyTable = document.getElementById('table-body');
function printTable(table){
    for(let i=0;i<table.length;i++){
        var newRow=bodyTable.insertRow();
        let j=0;
        for(let key in table[i]){
            var newCell = newRow.insertCell(j++);
            newCell.innerHTML=table[i][key];
        }
    }
}
printTable(tableData);
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");
var filterBut=document.getElementById('filter-btn');


function FormatTable(){
    var new_table=tableData;
    if(document.getElementById("datetime").value!=""){ 
        new_table = new_table.filter(sighting => sighting.datetime===inputDate.property("value"));
    }
    if(document.getElementById("city").value!=""){ 
        new_table = new_table.filter(sighting => sighting.city===inputCity.property("value"));
    }
    if(document.getElementById("state").value!=""){ 
        new_table = new_table.filter(sighting => sighting.state===inputState.property("value"));
    }
    if(document.getElementById("country").value!=""){ 
        new_table = new_table.filter(sighting => sighting.country===inputCountry.property("value"));
    }
    if(document.getElementById("shape").value!=""){ 
        new_table = new_table.filter(sighting => sighting.shape===inputShape.property("value"));
    }
    bodyTable.innerHTML="";
    printTable(new_table);
}

//inputText.on("change",FormatTable);
filterBut.addEventListener("click",FormatTable);