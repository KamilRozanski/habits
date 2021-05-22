const imput = document.querySelector("#habit")
const sumbitButton = document.querySelector(".welcome__submit__button")

let imputValue = ""
sumbitButton.addEventListener("click", function () {
    getInputVal()
    hideWelcomePage()
    showCalendar()
})

function getInputVal() {
    imputVal = imput.value
    console.log(imputVal)
}

function hideWelcomePage() {
    const welcomePage = document.querySelector(".welcome")
    welcomePage.style.display = "none"
}

function showCalendar() {
    const calendar = document.querySelector(".calendar")
    calendar.style.display = "block"
}