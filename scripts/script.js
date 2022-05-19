
const currentDate = $("#current-date");
currentDate.text(moment().format("dddd, MMMM Do YYYY"));

var currentTime = moment().hour();

const past = $(".past");
const present = $(".present");
const future = $(".future");

const eightA = $("#8");
const nineA = $("#9");
const tenA = $("#10");
const elevenA = $("#11");
const twelveP = $("#12");
const oneP = $("#13");
const twoP = $("#14");
const threeP = $("#15");
const fourP = $("#16");
const fiveP = $("#17");

const saveBtn = $(".saveBtn");
const refreshBtn = $(".refreshBtn")

const workDayTotal = [nineA, tenA, elevenA, twelveP, oneP, twoP, threeP, fourP, fiveP];

var calItemText = {
    nineA: nineA.val(),
    tenA: tenA.val(),
    elevenA: elevenA.val(),
    twelveP: twelveP.val(),
    oneP: oneP.val(),
    twoP: twoP.val(),
    threeP: threeP.val(),
    fourP: fourP.val(),
    fiveP: fiveP.val(),
};



for (let i = 0; i < workDayTotal.length; i++) {
    var timeBlockHour = parseInt(workDayTotal[i].attr("id"));
    if (currentTime === timeBlockHour) {
        workDayTotal[i].addClass("present");
    }
    if (currentTime < timeBlockHour) {
        workDayTotal[i].addClass("future");
    }
    else {
        workDayTotal[i].addClass("past");
    }
};


saveBtn.click(function(event) {
    var textBox = event.currentTarget.previousElementSibling.value;
    var hour = event.currentTarget.dataset.hour;
    calItemText[hour] = textBox;
    localStorage.setItem("datasave", JSON.stringify(calItemText));
})

// WHEN I refresh the page
// THEN the saved events persist

refreshBtn.click(function (event) {
    // console.log("click");
    // console.log(event.currentTarget);
    // console.dir(event.currentTarget);
    
});