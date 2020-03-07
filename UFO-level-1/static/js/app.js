// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// define a function to render table
function renderTable(dataset) {
    // use forEach to iterate thru data
    dataset.forEach((item) => {
        // append a new row to the table body
        var row = tbody.append("tr");
        
        // use forEach to store each paired value in the sighting to a cell
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

renderTable(tableData);

// select the 'filter table' button
var filterSubmit = d3.select("#filter-btn");

// function to handle what happens on a click
filterSubmit.on("click", function() {
    // select the text from the filter form
    var dateToFilter = d3.select("#datetime").property("value");

    // re-render the original table if the filter date is empty
    if (dateToFilter == '') {
        renderTable(tableData);
        return;
    }
    else {
        // otherwise clear the html inside the tbody
        tbody.html('');
    };

    // create a new dataset based using a filtered version of the original
    var filteredData = tableData.filter(sighting => sighting.datetime === dateToFilter);

    // re-run the renderTable function using the filtered data
    renderTable(filteredData);
});