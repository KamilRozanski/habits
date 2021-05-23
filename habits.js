const input = document.querySelector(".welcome__input")
const sumbitButton = document.querySelector(".welcome__submit__button")

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


const currenMonth = document.querySelector(".calendar__current__date")
currenMonth.innerHTML = `${day}/${(monthNamesArr[month -1])}/${year}`
console.log(day, month, year)