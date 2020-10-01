// What is the current day?
// What time is it? Or at least the hour.
// What is the action when that certain button is clicked?
// How to save that text in the box?
// How to update the background colors based on time of day?


var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format('dddd, MMMM Do YYYY').toString();
currentDay.innerHTML = currentTime;

// Find out how to get current hour using momentjs library
// compare all 9 hour rows to current hour value
// if row is before current hour set class to past
// if row is the current hour set class to present
// if row is after the current hour set class to future

function momentTime() {
    var currentHour = moment().hour();

    for (i = 9; i <= 17; i++) {
        // var currentRow = document.querySelector("#row" + i);
        var currentRow = $("#row" + i);
        if (i == currentHour) {
            currentRow.addClass("present");
        }
        if (i > currentHour) {
            currentRow.addClass("future");
        }
        if (i < currentHour) {
            currentRow.addClass("past");
        }
    }
}

$(document).ready(function() {
    momentTime();
});