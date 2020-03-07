// from data.js
var tableData = data;

// use d3 to select the table body
var tbody = d3.select("tbody");

// use forEach to iterate thru data
tableData.forEach((ufoSighting) => {
    // append a new row to the table body
    var row = tbody.append("tr");
    
    // use forEach to store each paired value in the sighting to a cell
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        console.log(value)
    });
});