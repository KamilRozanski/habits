const input = document.querySelector(".welcome__input")
const sumbitButton = document.querySelector(".welcome__submit__button")
const currenMonth = document.querySelector(".calendar__current__date")
const daysLi = document.querySelectorAll(".days > li")


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
const myDate = new Date();
let day = myDate.getDate()
let month = myDate.getMonth() + 1
let year = myDate.getFullYear()

const monthNamesArr = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];


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
    let cunter = month
    if (month > 1) {
        month--
    }
    currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`
    console.log(cunter)
})
nextmonth.addEventListener("click", function () {
    let cunter = month
    if (month >= 1 && month < 12) {
        month++
    }
    currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`
    console.log(cunter)
})



//clickable days