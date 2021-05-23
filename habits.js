const input = document.querySelector(".welcome__input")
const sumbitButton = document.querySelector(".welcome__submit__button")

let inputValue = input.value

sumbitButton.addEventListener("click", function (e) {
    if (input.value != "") {
        e.preventDefault()
        getInputVal()
        hideWelcomePage()
        showCalendar()
        // console.log(input.value)
    }

})

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

console.log(input.value + "value")