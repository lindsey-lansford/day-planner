
let currentDate = $("#current-date");

currentDate.text(moment().format("dddd, MMMM Do YYYY"));

const pastGray = document.querySelector('.past').style.color = "gray";
const presentRed = document.querySelector('.present').style.color = "red";
const futureGreen = document.querySelector('.future').style.color = "green";

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