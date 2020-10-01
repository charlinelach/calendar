// Time & date variable creation
var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format('dddd, MMMM Do YYYY').toString();
currentDay.innerHTML = currentTime;

// Checks the current hour and selects the appropriate background color
function momentTime() {
    var currentHour = moment().hour();

    for (var i = 9; i <= 17; i++) {
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

// Button click action
$("#button9").click(function () {
    var calText = $("#row9").val();
    localStorage.setItem("row9", calText);
});

function eventSave() {
    // Text is written in the field
    var btn = $("#button" + j);

    var calText = $("#row" + j);
    localStorage.setItem("", calText);
}

// Page function is triggered by this
$(document).ready(function () {
    var row9 = document.querySelector("#row9");
    row9.innerHTML = localStorage.getItem("row9");
    momentTime();
});