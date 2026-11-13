const name = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
const course = document.querySelector("#course")
const cardName =document.querySelector("#cardName")
const cardEmail = document.querySelector("#cardEmail")
const cardAge = document.querySelector("#cardAge")
const cardCourse = document.querySelector("#cardCourse")
const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click',(e) => {
    e.preventDefault()
    cardName.textContent=name.value
    cardEmail.textContent=email.value
    cardAge.textContent=age.value
    cardCourse.textContent= course.value
})