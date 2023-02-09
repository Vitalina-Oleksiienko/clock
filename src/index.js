function clock() {
    const deg = 6
    const hoursArrow = document.querySelector('.hour__arrow')
    const minuteArrow = document.querySelector('.minute__arrow')
    const secondArrow = document.querySelector('.second__arrow')

    setInterval(() => {
        const day = new Date()

        const hours = day.getHours() * 30
        const minutes = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minuteArrow.style.transform = `rotateZ(${minutes}deg)`
        secondArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}
clock()