const input = document.querySelector(".welcome__input")
const sumbitButton = document.querySelector(".welcome__submit__button")
const currenMonth = document.querySelector(".calendar__current__date")
const calendarHeader = document.querySelector(".calendar__header")
const ulDays = document.querySelector(".days")


const myDate = new Date();
let day = myDate.getDate()
let month = myDate.getMonth() + 1
let year = myDate.getFullYear()
const lastDay = new Date(year, month, 0).getDate()

const monthNamesArr = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

//create calendar days from 1 to 31 


console.log(myDate, lastDay)
let days = ""
for (let i = 1; i <= lastDay; i++) {
    days += `<li class ="days__li">${i}</li>`
    ulDays.innerHTML = days
}
const liDays = document.querySelectorAll(".days__li")


// let inputValue = input.value

// sumbitButton.addEventListener("click", function (e) {
//     if (input.value != "") {
//         e.preventDefault()
//         getInputVal()
//         hideWelcomePage()
//         showCalendar()
//         // console.log(input.value)
//     }

// })

function getInputVal() {
    inputVal = input.value
    return inputValue
}

function hideWelcomePage() {
    const welcomePage = document.querySelector(".welcome")
    welcomePage.style.display = "none"
}

function showCalendar() {
    const calendar = document.querySelector(".calendar")
    calendar.style.display = "block"
}


//calendar






function currentDay() {
    const currentDay = document.querySelectorAll(".days > li")
    const currentDaySpan = document.createElement("span")

    for (let i = 0; i <= currentDay.length; i++) {
        if (i === day) {
            currentDay[day - 1].innerHTML = ""
            currentDay[day - 1].appendChild(currentDaySpan).innerHTML = `${day}`
            currentDaySpan.classList.add("active")

        }
    }
}
currentDay()



//change months

currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`


const prevmonth = document.querySelector(".prev")
const nextmonth = document.querySelector(".next")

prevmonth.addEventListener("click", function () {
    if (month > 1) {
        month--
    }
    if (month === 5) {
        return currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`
    } else {
        currenMonth.innerHTML = `${(monthNamesArr[month -1])}/${year}`
    }

})
nextmonth.addEventListener("click", function () {
    if (month >= 1 && month < 12) {
        month++
    }
    if (month === 5) {
        return currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`
    } else {
        currenMonth.innerHTML = `${(monthNamesArr[month -1])}/${year}`
    }


})



// clickable days

function clickOnDays() {
    liDays.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("day__active")
        })
    })
}

clickOnDays()