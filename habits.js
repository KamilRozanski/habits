const input = document.querySelector(".welcome__input")
let inputVal = ""
const sumbitButton = document.querySelector(".welcome__submit__button")
const currenMonth = document.querySelector(".calendar__current__date")
const calendarHeader = document.querySelector(".calendar__header")
const ulDays = document.querySelector(".days")
let liDays;




const myDate = new Date();
let day = myDate.getDate()
let month = myDate.getMonth() + 1
let year = myDate.getFullYear()
let lastDay = new Date(year, month, 0).getDate()




const monthNamesArr = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

//create calendar days from 1 to 31 

function showNextMonth() {
    console.log(month)
    return month++
}

function createCalendarDays() {
    let days = ""
    for (let i = 1; i <= lastDay; i++) {
        days += `<li class ="days__li">${i}</li>`
        ulDays.innerHTML = days
        liDays = document.querySelectorAll(".days__li")
    }
}

createCalendarDays()


// sumbitButton.addEventListener("click", function (e) {
//     if (input.value != "") {
//         e.preventDefault()
//         getInputVal()
//         hideWelcomePage()
//         showCalendar()
//     }

// })

function getInputVal() {
    inputVal = input.value
    // console.log(input.value)
    return inputVal
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
    lastDay = new Date(year, month, 0).getDate()
    createCalendarDays()
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
    lastDay = new Date(year, month, 0).getDate()
    createCalendarDays()

})



// clickable days


function clickOnDays() {
    liDays.forEach(el => {
        el.addEventListener("click", () => {
            let habit = document.createElement("div")
            habit.innerHTML = inputVal
            el.appendChild(habit)
            el.classList.toggle("day__active")
        })
    })
}

clickOnDays()