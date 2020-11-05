// from data.js
const tableData = data;
// YOUR CODE HERE!
let tBody = d3.select("tbody")
function initializeTable (data)
 {
    tBody.html("");
    data.forEach((ufoData) => {
        var eachRow = tBody.append("tr")
        // loop through each row
        Object.values(ufoData).forEach((value) => {
            var eachTd = eachRow.append("td")
            eachTd.text(value)
        });
    });
}
initializeTable(tableData)
function filterData () {
    var inputData = d3.select("#datetime")
    var inputValue = inputData.property("value")
    // match data using filter
    var filterDates = data.filter(data => data.datetime === inputValue);
    console.log(filterDates)
    initializeTable(filterDates);
    d3.event.preventDefault();
};
// selecting the button
var button = d3.selectAll("#filter-btn");
// selecting the form
var form = d3.select("form");
// event listeners
button.on("click", filterData);
form.on("submit", filterData);