const button1 = document.querySelector('.col1')
const button2 = document.querySelector('.col2')
const button3 = document.querySelector('.col3')
const button4 = document.querySelector('.col4')
const button5 = document.querySelector('.col5')

button1.addEventListener('click', function() {
    const root = document.documentElement
    root.style.setProperty('--primary-button-bg', '#243277')
})

button2.addEventListener('click', function() {
    const root = document.documentElement
    root.style.setProperty('--primary-button-bg', '#553772')
})

button3.addEventListener('click', function() {
    const root = document.documentElement
    root.style.setProperty('--primary-button-bg', '#8f3b76')
})

button4.addEventListener('click', function() {
    const root = document.documentElement
    root.style.setProperty('--primary-button-bg', '#c7417b')
})

button5.addEventListener('click', function() {
    const root = document.documentElement
    root.style.setProperty('--primary-button-bg', '#f5487f')
})