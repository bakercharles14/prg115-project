let date = new Date()
let n = date.toDateString()
let time = date.toLocaleTimeString()

document.getElementById('date-time').innerHTML = n + ' ' + time

function booleanCheck() {
    let form = document.querySelector('.check-form')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        let formInput = document.querySelector('.check-form-input').value
        if (formInput === "") {
            alert('Cannot be blank!')
        } else if (formInput === "bird" || "Bird") {
            alert('Correct!')
        } else {
            alert('Incorrect!')
        }
    })
} booleanCheck()