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

// Button click action... One per button/row
$("#button9").click(function () {
    var calText = $("#row9").val();
    localStorage.setItem("row9", calText);
});

$("#button10").click(function () {
    var calText = $("#row10").val();
    localStorage.setItem("row10", calText);
});

$("#button11").click(function () {
    var calText = $("#row11").val();
    localStorage.setItem("row11", calText);
});

$("#button12").click(function () {
    var calText = $("#row12").val();
    localStorage.setItem("row12", calText);
});

$("#button13").click(function () {
    var calText = $("#row13").val();
    localStorage.setItem("row13", calText);
});

$("#button14").click(function () {
    var calText = $("#row14").val();
    localStorage.setItem("row14", calText);
});

$("#button15").click(function () {
    var calText = $("#row15").val();
    localStorage.setItem("row15", calText);
});

$("#button16").click(function () {
    var calText = $("#row16").val();
    localStorage.setItem("row16", calText);
});

$("#button17").click(function () {
    var calText = $("#row17").val();
    localStorage.setItem("row17", calText);
});


// Page function is triggered by this... One per button/row
$(document).ready(function () {
    var row9 = document.querySelector("#row9");
    row9.innerHTML = localStorage.getItem("row9");
    momentTime();
});

$(document).ready(function () {
    var row10 = document.querySelector("#row10");
    row10.innerHTML = localStorage.getItem("row10");
    momentTime();
});

$(document).ready(function () {
    var row11 = document.querySelector("#row11");
    row11.innerHTML = localStorage.getItem("row11");
    momentTime();
});

$(document).ready(function () {
    var row12 = document.querySelector("#row12");
    row12.innerHTML = localStorage.getItem("row12");
    momentTime();
});

$(document).ready(function () {
    var row13 = document.querySelector("#row13");
    row13.innerHTML = localStorage.getItem("row13");
    momentTime();
});

$(document).ready(function () {
    var row14 = document.querySelector("#row14");
    row14.innerHTML = localStorage.getItem("row14");
    momentTime();
});

$(document).ready(function () {
    var row15 = document.querySelector("#row15");
    row15.innerHTML = localStorage.getItem("row15");
    momentTime();
});

$(document).ready(function () {
    var row16 = document.querySelector("#row16");
    row16.innerHTML = localStorage.getItem("row16");
    momentTime();
});

$(document).ready(function () {
    var row17 = document.querySelector("#row17");
    row17.innerHTML = localStorage.getItem("row17");
    momentTime();
});