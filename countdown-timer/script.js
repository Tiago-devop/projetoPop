const newYears = '1 Jan 2021'

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const days = currentDate.getDate()
    const hours = currentDate.getHours()
    const mins = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    console.log(days, hours, mins, seconds)
}

// initial call
countdown()

// setInterval(countdown, 5000)

