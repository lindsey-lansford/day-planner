
const currentDate = $("#current-date");
currentDate.text(moment().format("dddd, MMMM Do YYYY"));
// console.log(currentDate);

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

const workDayTotal = [ eightA, nineA, tenA, elevenA, twelveP, oneP, twoP, threeP, fourP, fiveP];
// console.log(workDayTotal);

var currentTime = moment().hour();
// console.log(currentTime)


for (let i = 0; i < workDayTotal.length; i++) {
    // console.log(workDayTotal[i].attr("id"));
    var timeBlockHour = parseInt(workDayTotal[i].attr('id'));

    if (currentTime === timeBlockHour) {
        // console.log('==')
        workDayTotal[i].addClass("present");
    }
    if (currentTime < timeBlockHour) {
        // console.log("future");
        workDayTotal[i].addClass("future");
    }
    else {
        workDayTotal[i].addClass("past");
    }
}

saveBtn.click(function () {
    console.log("click")
    console.log(this)
})


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    //LOCAL STORAGE/JSON

// WHEN I refresh the page
// THEN the saved events persist

refreshBtn.click(function () {
    console.log("click");
    console.log(this);
});