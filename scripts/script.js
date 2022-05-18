
const currentDate = $("#current-date");
currentDate.text(moment().format("dddd, MMMM Do YYYY"));

const past = $(".past");
const present = $(".present");
const future = $(".future");

const nineA = $("9");
const tenA = $("10");
const elevenA = $("11");
const twelveP = $("12");
const oneP = $("1");
const twoP = $("2");
const threeP = $("3");
const fourP = $("4");
const fiveP = $("5");


const workDayTotal = [nineA, tenA, elevenA, twelveP, oneP, twoP, threeP, fourP, fiveP]
console.log(workDayTotal)

var currentTime = moment().format('HH');
console.log(currentTime)

//do i need to add the 8workday hours and 24total day hours to a loop or varible??
for (let i = 0; i < workDayTotal.length; i++) {
    console.log([i])
    if (currentTime === i) {
        currentTime.attr('present'); 
    }
    // if (currentTime > i) {
    //     currentTime.attr('future');
    // }
    // else {
    //     currentTime.attr('past');
    // }

}

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //ASSIGNING PAST PRESENT AND FUTURE IRL TIME TO A COLOR, IF/ELSE STATEMENTS:

// WHEN I click into a time block
// THEN I can enter an event
    //MODUALS

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    //LOCAL STORAGE/JSON

// WHEN I refresh the page
// THEN the saved events persist