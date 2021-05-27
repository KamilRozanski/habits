const input = document.querySelector(".welcome__input")
let inputVal = ""
const yourHabitHeader = document.querySelector(".your__habit")
const sumbitButton = document.querySelector(".welcome__submit__button")
const calendarHeader = document.querySelector(".calendar__header")
const ulDays = document.querySelector(".days")
let liDays;
const prevmonth = document.querySelector(".prev")
const nextmonth = document.querySelector(".next")
const headerCalendarDate = document.querySelector(".calendar__current__date")






const myDate = new Date();
let day = myDate.getDate()
let month = myDate.getMonth() + 1
let year = myDate.getFullYear()



const monthNamesArr = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
//welcome section
// sumbitButton.addEventListener("click", function (e) {
//     if (input.value != "") {
//         e.preventDefault()
//         getInputVal()
//         hideWelcomePage()
//         showCalendar()
//     }
//     yourHabitHeader.innerHTML = `Your habit is ${inputVal}`

// })

function getInputVal() {
    inputVal = input.value
    return inputVal
}

function hideWelcomePage() {
    const welcomePage = document.querySelector(".welcome")
    welcomePage.style.display = "none"

}

function showCalendar() {
    const calendar = document.querySelector(".calendar")
    calendar.style.display = "flex"
}







//calendar
function renderCalendar() {
    let lastDay = new Date(year, month, 0).getDate()
    let lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate()
    myDate.setDate(1)
    let firstDayIndex = myDate.getDay()
    const lastDayIndex = new Date(year, month, 0).getDay();
    const nextDays = 7 - lastDayIndex
    let days = ""

    for (let n = firstDayIndex - 1; n > 0; n--) {
        days += `<li class ="days__li__previus">${lastDayOfPrevMonth + 1 - n}</li>`
        ulDays.innerHTML = days
    }

    for (let i = 1; i <= lastDay; i++) {
        days += `<li class ="days__li">${i}</li>`
        ulDays.innerHTML = days
        liDays = document.querySelectorAll(".days__li")
    }

    for (let y = 1; y <= nextDays; y++) {
        days += `<li class ="days__li__previus">${y}</li>`
        ulDays.innerHTML = days
        liDays = document.querySelectorAll(".days__li")
    }
    if (day && month && year) {
        selectCurrentDay()
    }
}
renderCalendar()


function selectCurrentDay() {
    const currentDay = document.querySelectorAll(".days__li")
    const currentDaySpan = document.createElement("span")

    for (let i = 0; i <= currentDay.length; i++) {
        if (i === day) {
            currentDay[day - 1].innerHTML = ""
            currentDay[day - 1].appendChild(currentDaySpan).innerHTML = `${day}`
            currentDaySpan.classList.add("active__day")
        }
    }
}


//change months

headerCalendarDate.innerHTML = `${day}/${(monthNamesArr[month-1])}/${year}`
prevmonth.addEventListener("click", function () {
    if (month > 1) {
        month--
    }
    headerCalendarDate.innerHTML = `${(monthNamesArr[month-1])}/${year}`

    // renderCalendar()

    myDate.setMonth(myDate.getMonth() - 1)
    clickOnDays()

})
nextmonth.addEventListener("click", function () {
    if (month < 12) {
        month++
    }
    headerCalendarDate.innerHTML = `${(monthNamesArr[month-1])}/${year}`

    // renderCalendar()

    myDate.setMonth(myDate.getMonth() + 1)
    clickOnDays()

})



// clickable days

function clickOnDays() {
    liDays.forEach(el => {
        el.addEventListener("click", () => {
            let habit = document.createElement("div")
            el.classList.toggle("habit__active")

            if (el.childNodes.length <= 1) {
                habit.innerHTML = inputVal
                el.appendChild(habit)

            } else {

            }
        })
    })
}

clickOnDays()