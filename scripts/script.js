
const currentDate = $("#current-date");
currentDate.text(moment().format("dddd, MMMM Do YYYY"));

let currentTime = moment().hour();

const past = $(".past");
const present = $(".present");
const future = $(".future");

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

const workDayTotal = [nineA, tenA, elevenA, twelveP, oneP, twoP, threeP, fourP, fiveP];

for (let i = 0; i < workDayTotal.length; i++) {
    let timeBlockHour = parseInt(workDayTotal[i].attr("id"));
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

//created a single storage key that holds a string of the objects' values
let calItemText = {
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
console.log(calItemText);
//targeting the individual save button-->and individual textBox content-->setting each to the localStorage key.
saveBtn.click(function (event) {
    event.preventDefault();
    let textBox = event.currentTarget.previousElementSibling.value;
    let hour = event.currentTarget.dataset.hour;
    calItemText[hour] = textBox;
    localStorage.setItem("datasave", JSON.stringify(calItemText));

})

//get the data from localStorage and convert string --> obj
let savedData = JSON.parse(localStorage.getItem('datasave'));
console.log(savedData);

//breaking out each textarea content value from the calItemText obj
nineA[0].value = savedData.nineA;
tenA[0].value = savedData.tenA;
elevenA[0].value = savedData.elevenA;
twelveP[0].value = savedData.twelveP;
oneP[0].value = savedData.oneP;
twoP[0].value = savedData.twoP;
threeP[0].value = savedData.threeP;
fourP[0].value = savedData.fourP;
fiveP[0].value = savedData.fiveP;


